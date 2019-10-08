const makeTd = (content) => { // content is a string
    const column = document.createElement('td');
    column.textContent = content;

    return column;
};


export default () => {
    const tableRow = document.createElement('tr');

    const columnOne = makeTd('Trucker Jacket');
    const columnTwo = makeTd('2');
    const columnThree = makeTd('$300.00');
    const columnFour = makeTd('$600.00');

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