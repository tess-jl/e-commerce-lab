import { makePrettyCurrency, calcRowItem } from '../common/utils.js';




const makeTd = (content) => { // content is a string
    const column = document.createElement('td');
    column.textContent = content;

    return column;
};

//This function takes both a cart line item, and the corresponding product, and returns dom that matches your static html example:

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