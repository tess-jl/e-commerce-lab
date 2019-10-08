import renderClothes from '../products/render-clothes.js/index.js';

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