import renderTableRow from './render-table-row.js';
import clothing from '../data.js';
import { findById, makePrettyCurrency, calcOrderTotal } from '../common/utils.js';
import { ORDER_KEY, initializeEmptyOrder } from '../products/render-clothes.js';


if (ORDER_KEY === null) {
    initializeEmptyOrder();
}

const tbodyElement = document.querySelector('tbody'); 
const placeOrderButton = document.getElementById('place-order-button');


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


if (javascriptReadableCart !== null) {
    placeOrderButton.addEventListener('click', () => {
        localStorage.removeItem(ORDER_KEY);
        alert('order placed: \n' + JSON.stringify(javascriptReadableCart, true, 2));
        window.location = '../';
    });
} else {
    placeOrderButton.disabled = true;
}
