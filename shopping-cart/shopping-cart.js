import renderTableRow from './render-table-row.js';
import clothing from '../data.js';
import { findById, makePrettyCurrency } from '../common/utils.js';
import { ORDER_KEY } from '../products/render-clothes.js';

const tbodyElement = document.querySelector('tbody'); 
const placeOrderButton = document.getElementById('place-order-button');

// const json = localStorage.getItem('ORDER_KEY');
// let cartArray;
// if (json) {
//     cartArray = JSON.parse(json);
// }
// else {
//     cartArray = [];
// }


export const calcRowItem = (itemQuantity, itemPrice) => {
    const rowCost = Number((itemQuantity * itemPrice).toFixed(2));
    return rowCost; 

};
export const calcOrderTotal = (cartArray, inventoryArray) => {
    let orderTotal = 0; 
    cartArray.forEach (orderItem => {
        const garmentId = orderItem.id;
        const garment = findById(inventoryArray, garmentId);
        const garmentQuantity = orderItem.quantity; 
        
        let costOfItemOrder = calcRowItem(garmentQuantity, garment.price);
        orderTotal += costOfItemOrder; 
    });
    return orderTotal; 
};

const buildTotalCell = (cartArray, inventoryArray) => {
    const totalCell = document.getElementById('order-total-cell');
    const cartTotal = calcOrderTotal(cartArray, inventoryArray);
    totalCell.textContent = makePrettyCurrency(cartTotal);
};

const addRows = (cartArray, inventoryArray) => {
    cartArray.forEach(orderItem => {
        const garment = findById(inventoryArray, orderItem.id);
        const dom = renderTableRow(orderItem, garment);
        tbodyElement.appendChild(dom);

    });
};

const buildTable = (cartArray, inventoryArray) => {
    buildTotalCell(cartArray, inventoryArray);
    addRows(cartArray, inventoryArray); 
};

const javascriptReadableCart = JSON.parse(localStorage.getItem(ORDER_KEY)); 

buildTable(javascriptReadableCart, clothing);


if (javascriptReadableCart.length === 0) {
    placeOrderButton.disabled = true;
} else {
    placeOrderButton.addEventListener('click', () => {
        localStorage.removeItem(javascriptReadableCart);
        alert('order placed: \n' + JSON.stringify(javascriptReadableCart, true, 2));
        window.location = '../';
    });
}


