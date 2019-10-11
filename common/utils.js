export const makePrettyCurrency = (number) => {
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


