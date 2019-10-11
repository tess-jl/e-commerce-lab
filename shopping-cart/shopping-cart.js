import renderTableRow from './render-table-row.js';
import clothing from '../data.js';
import { findById, makePrettyCurrency } from '../common/utils.js';
import { ORDER_KEY } from '../products/render-clothes.js';

const tbodyElement = document.querySelector('tbody'); 


export const calcRowItem = (itemQuantity, itemPrice) => {
    const rowCost = Number((itemQuantity * itemPrice).toFixed(2));
    return rowCost; 

};
export const calcOrderTotal = (order, clothing) => {
    let orderTotal = 0; 
    order.forEach (orderItem => {
        const garmentId = orderItem.id;
        const garmentQuantity = orderItem.quantity; 
        
        const garment = findById(clothing, garmentId);
        console.log(garment, 'garment');
        let costOfItemOrder = calcRowItem(garmentQuantity, garment.price);
        orderTotal += costOfItemOrder; 

    });
    return orderTotal; 
};



const buildTotalCell = (order, clothing) => {
    const totalCell = document.getElementById('order-total-cell');
    console.log(totalCell);
    const cartTotal = calcOrderTotal(order, clothing);
    console.log(totalCell, 'second time');
    console.log(cartTotal);
    totalCell.textContent = makePrettyCurrency(cartTotal);
};

const addRow = (order, clothing) => {
    const garment = findById(clothing, order.id);
    const dom = renderTableRow(order, garment);

    tbodyElement.appendChild(dom);
};

const addRows = (order, clothing) => {
    order.forEach(clothingOrder => {
        addRow(clothingOrder, clothing); // for everything in the car we add a row 
    });
};

const buildTable = (order, clothing) => {
    buildTotalCell(order, clothing);
    addRows(order, clothing); // order is not hard-coded, we got order from the local storage instead
};

const javascriptReadableOrder = JSON.parse(localStorage.getItem(ORDER_KEY)); // sucking the order out of the local storage and use the JSON.parse to unstringify it

buildTable(javascriptReadableOrder, clothing);


