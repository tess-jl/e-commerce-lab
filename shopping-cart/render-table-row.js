import { makePrettyCurrency } from '../common/utils.js';
import { calcRowItem } from './shopping-cart.js';

const makeTd = (content) => { // content is a string
    const column = document.createElement('td');
    column.textContent = content;

    return column;
};

export default (rowItem, clothing) => {
    const tableRow = document.createElement('tr');

    const prettyPrice = makePrettyCurrency(clothing.price);
    const totalRowPrice = calcRowItem(rowItem.quantity, clothing.price);
    const prettyTotal = makePrettyCurrency(totalRowPrice);

    const columnOne = makeTd(clothing.name);
    const columnTwo = makeTd(rowItem.quantity);
    const columnThree = makeTd(prettyPrice);
    const columnFour = makeTd(prettyTotal);

    tableRow.appendChild(columnOne);
    tableRow.appendChild(columnTwo);
    tableRow.appendChild(columnThree);
    tableRow.appendChild(columnFour);

    return tableRow;
};