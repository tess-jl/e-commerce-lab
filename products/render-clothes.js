const ORDER_KEY = 'order'; //magic string
import { findById } from '../common/utils.js';



const initializeEmptyOrder (() => {
    const serializedOrder = JSON.stringify(emptyOrder); // making an object a string to store locally 
    localStorage.setItem(ORDER_KEY, serializedOrder);
});

const getOrder = () => JSON.parse(localStorage.getItem(ORDER_KEY));

const incrementOrderById = (id, order) => {

    let itemAlreadyInOrder = false;

    order.forEach(newOrder => {
        //if the ids match
        if (order.id === newOrder.id) {
            //increment the quantity of the order item 
            itemAlreadyInOrder = true; 
            newOrder.quantity++; 
        }
    });

    if (itemAlreadyInOrder) {
        return; // break function
    } else {
        const newOrderItem = { 
            id: id,
            quantity: 1 //,
        };
        order.push(newOrderItem);
    }
};





function renderClothes(clothing) {
    const li = document.createElement('li');
    li.className = clothing.category;
    li.title = clothing.description;

    const h3 = document.createElement('h3');
    h3.textContent = clothing.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = clothing.image;
    img.alt = clothing.name + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const usd = clothing.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    const priceTextNode = document.createTextNode(usd);
    p.appendChild(priceTextNode);
    
    const button = document.createElement('button');
    button.textContent = 'add to cart';
    button.value = clothing.id;
   
    button.addEventListener('click', () => {

        // retrieve existing shopping cart from the localStorage
        let orderLocalStorage = getOrder();

        // if no order data, then set the cart data of localStorage to an empty array (initialize) that has been turned into a string
        if (!orderLocalStorage) {
            initializeEmptyOrder();
            currentOrder = getOrder();
        } 

        // if there is already order data, then need to increment through the array 
        let clothingToIncrement = findById(currentOrder, clothing.id);

        



        

        //check if the 

    });
    p.appendChild(button);
    li.appendChild(p);

    return li;
};

export default renderClothes;