export const makePrettyCurrency = (number) => {
    const prettyCurrency = number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    return prettyCurrency;
};




