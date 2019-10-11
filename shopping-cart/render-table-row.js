import { makePrettyCurrency } from '../common/utils.js';
import { calcRowItem } from './shopping-cart.js';

const makeTd = (content) => { 
    const column = document.createElement('td');
    column.textContent = content;

    return column; 
};

export default (orderItem, inventoryObject) => {
    const tableRow = document.createElement('tr');

    const prettyPrice = makePrettyCurrency(inventoryObject.price);
    const totalRowPrice = calcRowItem(orderItem.quantity, inventoryObject.price);
    const prettyTotal = makePrettyCurrency(totalRowPrice);

    const columnOne = makeTd(inventoryObject.name);
    const columnTwo = makeTd(orderItem.quantity);
    const columnThree = makeTd(prettyPrice);
    const columnFour = makeTd(prettyTotal);

    tableRow.appendChild(columnOne);
    tableRow.appendChild(columnTwo);
    tableRow.appendChild(columnThree);
    tableRow.appendChild(columnFour);

    return tableRow;
};