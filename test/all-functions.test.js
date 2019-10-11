import renderClothes from '../products/render-clothes.js';
import renderTableRow from '../shopping-cart/render-table-row.js';
import { findById } from '../common/utils.js';
import { calcRowItem, calcOrderTotal } from '../shopping-cart/shopping-cart.js';
import clothing from '../data.js'; 

const test = QUnit.test;
QUnit.module('Render Clothes');


test('renders a piece of clothing', assert => {
    // arrange
    const truckerJacket = {
        id:'trucker-jacket',
        name: 'Trucker Jacket',
        image: '../assets/trucker-jacket.jpg',
        description: 'a casual jacket',
        category: 'jacket',
        price: 300.00
    };
    const expected = '<li class="jacket" title="a casual jacket"><h3>Trucker Jacket</h3><img src="../assets/trucker-jacket.jpg" alt="Trucker Jacket image"><p class="price">$300.00<button value="trucker-jacket">add to cart</button></p></li>';
    
    // act
    const dom = renderClothes(truckerJacket);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);
});

test('finds a clothing item in the clothing array by id', assert => {
    // arrange
    const expected = 'trucker-jacket';
    const id = 'trucker-jacket';
    
    // act
    const foundItem = findById(clothing, id);
    
    // assert
    assert.equal(foundItem.id, expected);
});

test('calculate the cost of a row', assert => {
    // arrange
    const itemQuantity = 2; 
    const itemPrice = 300.01; 

    const expected = 600.02; 
    
    // act
    const rowCost = calcRowItem(itemQuantity, itemPrice);
    
    // assert
    assert.equal(rowCost, expected);
});

test('renders a table row', assert => {
    // arrange
    const order = {
        id: 'trucker-jacket',
        quantity: 2
    };

    const item = findById(clothing, order.id);
    const expected = '<tr><td>Trucker Jacket</td><td>2</td><td>$300.00</td><td>$600.00</td></tr>';
    
    // act
    const clothingElementTr = renderTableRow(order, item);
    const stringOfClothingElementTr = clothingElementTr.outerHTML;
    
    // assert
    assert.equal(stringOfClothingElementTr, expected);
});

test('calculates order total', assert => {
    // arrange
    const orderItem = [{
        id: 'trucker-jacket',
        quantity: 2
    }];

    const expected = '600';
    
    // act
    const orderTotal = calcOrderTotal(orderItem, clothing);
    // const stringOfOrderTotal = orderTotal.outerHTML;
    
    // assert
    assert.equal(orderTotal, expected);
});