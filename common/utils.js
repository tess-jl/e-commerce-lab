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
    return null;
};

//REFACTORED USING FOR EACH:
// export const findById = (clothing, id) => {

//     let matchingOrder;
//     clothing.forEach(order => {
//         if(clothing.id === id) {
//             matchingOrder = clothing;
//         }
//     });
//   return matchingOrder;
// };





export const calcRowItem = (itemQuantity, itemPrice) => {
    const rowCost = Number((itemQuantity * itemPrice).toFixed(2));
    return rowCost; 

};

//KEEPING ORIGINAL LOOP HERE AS A REFERENCE:
// export const calcOrderTotal = (order, clothing) => {
//     let orderTotal = 0; 
    
//     for (let i = 0; i < order.length; i++) {
//         const orderItem = order[i];
//         const garmentId = orderItem.id;
//         const garmentQuantity = orderItem.quantity; 
        
//         const garment = findById(clothing, garmentId);

//         let costOfItemOrder = calcRowItem(garmentQuantity, garment.price);
//         orderTotal += costOfItemOrder; 
//     }
//     return orderTotal; 
// };

//Refactored
export const calcOrderTotal = (order, clothing) => {
    let orderTotal = 0; 

    order.forEach (orderItem => {
        const garmentId = orderItem.id;
        const garmentQuantity = orderItem.quantity; 
        
        const garment = findById(clothing, garmentId);

        let costOfItemOrder = calcRowItem(garmentQuantity, garment.price);
        orderTotal += costOfItemOrder; 

    });
    return orderTotal; 
};
