import renderTableRow from './render-table-row.js';
import clothing from '../data.js';
import { findById, calcOrderTotal, makePrettyCurrency } from '../common/utils.js';
import { ORDER_KEY } from '../products/render-clothes.js';

const tbodyElement = document.querySelector('tbody'); 


const buildTotalCell = (order, clothing) => {
    const totalCell = document.getElementById('order-total-cell');
    const cartTotal = calcOrderTotal(order, clothing);
    totalCell.textContent = makePrettyCurrency(cartTotal);
};

const addRow = (order, clothing) => {
    for (let i = 0; i < order.length; i++) {
        const rowItem = order[i];
        const garment = findById(clothing, rowItem.id);
        const dom = renderTableRow(rowItem, garment);

        tbodyElement.appendChild(dom);
    }
};

const addRows = (order, clothing) => {
    order.forEach(clothingOrder => {
        addRow(clothingOrder, clothing);
    });
};

const buildTable = (order, clothing) => {
    buildTotalCell(order, clothing);
    addRows(order, clothing);
};

const javascriptReadableOrder = JSON.parse(localStorage.getItem(ORDER_KEY));

buildTable(javascriptReadableOrder, clothing);