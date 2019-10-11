import renderTableRow from './render-table-row.js';
import clothing from '../data.js';
import { findById, makePrettyCurrency } from '../common/utils.js';
import { ORDER_KEY, initializeEmptyOrder } from '../products/render-clothes.js';


if (ORDER_KEY === null) {
    initializeEmptyOrder();
}

const tbodyElement = document.querySelector('tbody'); 
const placeOrderButton = document.getElementById('place-order-button');


export const calcRowItem = (itemQuantity, itemPrice) => {
    const rowCost = Number((itemQuantity * itemPrice).toFixed(2));
    return rowCost; 

};
export const calcOrderTotal = (cartArray, inventoryArray) => {
    console.log(cartArray);
    if (cartArray !== null) {
        let orderTotal = 0; 
        cartArray.forEach (orderItem => {
            const garmentId = orderItem.id;
            const garment = findById(inventoryArray, garmentId);
            const garmentQuantity = orderItem.quantity; 
            let costOfItemOrder = calcRowItem(garmentQuantity, garment.price);
            orderTotal += costOfItemOrder; 
        });
        return orderTotal; 
    }
};

const buildTotalCell = (cartArray, inventoryArray) => {
    if (cartArray !== null) {
        const totalCell = document.getElementById('order-total-cell');
        const cartTotal = calcOrderTotal(cartArray, inventoryArray);
        totalCell.textContent = makePrettyCurrency(cartTotal); // is cart total a number when there is no array?? 
    } else {
        return 'nothing in cart';
    }
};

const addRows = (cartArray, inventoryArray) => {
    if (cartArray !== null) {
        cartArray.forEach(orderItem => {
            const garment = findById(inventoryArray, orderItem.id);
            const dom = renderTableRow(orderItem, garment);
            tbodyElement.appendChild(dom);
        });
    } else {
        return 'nothing in cart';
    }
};

const buildTable = (cartArray, inventoryArray) => {
    buildTotalCell(cartArray, inventoryArray);
    addRows(cartArray, inventoryArray); 
};

const javascriptReadableCart = JSON.parse(localStorage.getItem(ORDER_KEY)); 

if (javascriptReadableCart !== null) {
    buildTable(javascriptReadableCart, clothing);
}


if (javascriptReadableCart === null) {
    placeOrderButton.disabled = true;
} else {
    placeOrderButton.addEventListener('click', () => {
        localStorage.removeItem(javascriptReadableCart);
        alert('order placed: \n' + JSON.stringify(javascriptReadableCart, true, 2));
        window.location = '../';
    });
}
