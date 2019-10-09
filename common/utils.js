export const makePrettyCurrency = (number) => {
    const makePrettyCurrency = number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    return makePrettyCurrency; 
};

export const findById = (clothing, id) => {
    for (let i = 0; i < clothing.length; i++) {
        const clothingItem = clothing[i];

        if (clothingItem.id === id) {
            return clothingItem;
        } 
    }
};

export const calcRowItem = (itemQuantity, itemPrice) => {
    const rowCost = Number((itemQuantity * itemPrice).toFixed(2));
    return rowCost; 

};

export const calcOrderTotal = (order, clothing) => {
    let orderTotal = 0; 
    
    for (let i = 0; i < order.length; i++) {
        const orderItem = order[i];
        const garmentId = orderItem.id;
        const garmentQuantity = orderItem.quantity; 
        
        const garment = findById(clothing, garmentId);

        let costOfItemOrder = calcRowItem(garmentQuantity, garment.price);
        orderTotal += costOfItemOrder; 
    }
    return orderTotal; 
};

