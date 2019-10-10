import { findById } from '../common/utils.js';
import clothing from '../data.js';

export const ORDER_KEY = 'order'; //magic string
const emptyOrder = [];



const initializeEmptyOrder = () => {
    const serializedOrder = JSON.stringify(emptyOrder); // making the array emptyOrder a string to store locally 
    localStorage.setItem(ORDER_KEY, serializedOrder); // key is the order, valuw is the empty array '[]' in string form 
};

const getOrder = () => JSON.parse(localStorage.getItem(ORDER_KEY));



const incrementOrderById = (id, order) => {

    let itemAlreadyInOrder = false;

    order.forEach(existingOrder => {
        //if the ids match
        if (id === existingOrder.id) {
            //increment the quantity of the order item 
            itemAlreadyInOrder = true; 
            existingOrder.quantity++; 
        }
    });

    if (itemAlreadyInOrder) { // means its true
        return; // break function
    } else {
        const newOrderItem = { 
            id: id,
            quantity: 1 
        };
        order.push(newOrderItem);
    }
};


const setOrder = (currentOrderInLocalStorage) => {
    const serializedNewCart = JSON.stringify(currentOrderInLocalStorage);
    localStorage.setItem(ORDER_KEY, serializedNewCart);
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
        let orderLocalStorage = getOrder(); //takes string returns object...const getOrder = () => JSON.parse(localStorage.getItem(ORDER_KEY));
        console.log(orderLocalStorage, 'order local storage');

        // if no order data in local storage, then set the cart data of localStorage to an empty array (initialize) that has been turned into a string
        if (!orderLocalStorage) {
            initializeEmptyOrder(); // serializes my emptyOrder array and sets it into local storage
            //orderLocalStorage is still undefined
            orderLocalStorage = getOrder(); // orderLocalStorage was undefined and now it's an empty array because it has synched up with the initializeEmptyOder
        }
        
        incrementOrderById(clothing.id, orderLocalStorage);
        setOrder(orderLocalStorage);

    });
    p.appendChild(button);
    li.appendChild(p);

    return li;
}

export default renderClothes;