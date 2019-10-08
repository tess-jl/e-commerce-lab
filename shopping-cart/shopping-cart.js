import renderTableRow from './render-table-row.js';
import clothing, { order } from '../data.js';
import { makePrettyCurrency } from '../common/utils.js';

const tableElement = document.querySelector('tbody'); 

let cartTotal = 0; 
order.forEach(clothingOrder => {

    clothing.forEach(clothing => {
        let clothingTotal; 

        if (clothing.id === clothingOrder.id) {
            const row = renderTableRow(clothing, clothingOrder)

            tableElement.appendChild(row);

            clothingTotal = clothing.price * clothingOrder.quantity; 

            cartTotal += clothingTotal; 
        }
    });
});

const totalCell = document.getElementById('order-total-cell');

totalCell.textContent = makePrettyCurrency(cartTotal); 