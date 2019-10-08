import { makePrettyCurrency } from '../common/utils.js';


const makeTd = (content) => { // content is a string
    const column = document.createElement('td');
    column.textContent = content;

    return column;
};


export default (clothing, order) => {
    const tableRow = document.createElement('tr');

    const totalPrice = order.quantity * clothing.price; 

    const prettyPrice = makePrettyCurrency(clothing.price);
    const prettyTotal = makePrettyCurrency(totalPrice);

    const columnOne = makeTd(clothing.name);
    const columnTwo = makeTd(order.quantity);
    const columnThree = makeTd(prettyPrice);
    const columnFour = makeTd(prettyTotal);

    // [
    //     makeTd('Trucker Jacket'). 
    //     makeTd('2'), 
    //     makeTd('$300.00'),
    //     makeTd('$600.00')
    // ]

    tableRow.appendChild(columnOne);
    tableRow.appendChild(columnTwo);
    tableRow.appendChild(columnThree);
    tableRow.appendChild(columnFour);

    // tableRow.appendChild(makeTd('Trucker Jacket'));
    // tableRow.appendChild(makeTd('2'));
    // tableRow.appendChild(makeTd('$300.00'));
    // tableRow.appendChild(makeTd('$600.00'));

    return tableRow;
};