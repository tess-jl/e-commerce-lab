import renderTableRow from './render-table-row.js';
import clothing, { order } from '../data.js';
import { findById, calcOrderTotal, makePrettyCurrency } from '../common/utils.js';

const tbodyElement = document.querySelector('tbody'); 

for (let i = 0; i < order.length; i++) {
    const rowItem = order[i];
    const garment = findById(clothing, rowItem.id);
    const dom = renderTableRow(rowItem, garment);

    tbodyElement.appendChild(dom);
}

const cartTotal = calcOrderTotal(order, clothing);
const totalCell = document.getElementById('order-total-cell');
totalCell.textContent = makePrettyCurrency(cartTotal);




//VS Danny's source code from class:

// let cartTotal = 0; 
// order.forEach(clothingOrder => {

//     clothing.forEach(clothing => {
//         let clothingTotal; 

//         if (clothing.id === clothingOrder.id) {
//             const row = renderTableRow(clothing, clothingOrder);

//             tableElement.appendChild(row);

//             clothingTotal = clothing.price * clothingOrder.quantity; 

//             cartTotal += clothingTotal; 
//         }
//     });
// });

// const totalCell = document.getElementById('order-total-cell');

// totalCell.textContent = makePrettyCurrency(cartTotal); 