export const ORDER_KEY = 'order'; 
const emptyOrder = [];



const initializeEmptyOrder = () => {
    const serializedOrder = JSON.stringify(emptyOrder); 
    localStorage.setItem(ORDER_KEY, serializedOrder); 
};

const getOrder = () => JSON.parse(localStorage.getItem(ORDER_KEY));



const incrementOrderById = (id, order) => {

    let itemAlreadyInOrder = false;

    order.forEach(existingOrder => {
        if (id === existingOrder.id) {
            itemAlreadyInOrder = true; 
            existingOrder.quantity++; 
        }
    });

    if (itemAlreadyInOrder) { 
        return; 
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
        let orderLocalStorage = getOrder(); 

        if (!orderLocalStorage) { 
            initializeEmptyOrder(); 
            orderLocalStorage = getOrder(); 
        }
        incrementOrderById(clothing.id, orderLocalStorage);
        setOrder(orderLocalStorage);
    });
    p.appendChild(button);
    li.appendChild(p);

    return li;
}

export default renderClothes;