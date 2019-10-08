export const makePrettyCurrency = (number) => {
    const makePrettyCurrency = number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    return makePrettyCurrency; 

};

// const totalClothingPrice = (clothting, quantity) => { // should have a TDD
//     clothing.price * quantity; 
// };

// export const totalCartPrice = (clothing, order) => {

// };



