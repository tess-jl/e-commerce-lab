

export const makePrettyCurrency = (number) => {
    console.log(number, 'number passed to makepretty');
    const makePrettyCurrency = number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    return makePrettyCurrency; 
};

export const findById = (clothing, id) => {
    let matchingOrder;
    
    clothing.forEach(item => {
        if (item.id === id) {
            matchingOrder = item;
        }
    });

    return matchingOrder;
};

export const calcRowItem = (itemQuantity, itemPrice) => {
    const rowCost = Number((itemQuantity * itemPrice).toFixed(2));
    return rowCost; 
};

export const calcOrderTotal = (cartArray, inventoryArray) => {
    console.log(cartArray);
    if (cartArray !== null) {
        let orderTotal = 0; 
        cartArray.forEach (orderItem => {
            const garmentId = orderItem.id;
            const garment = findById(inventoryArray, garmentId);
            const garmentQuantity = orderItem.quantity; 
            let costOfItemOrder = calcRowItem(garmentQuantity, garment.price);
            orderTotal += costOfItemOrder; 
        });
        return orderTotal; 
    }
};

