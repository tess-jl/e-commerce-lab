import clothing from '../data.js';
import renderClothes from './render-clothes.js';

const list = document.getElementById('clothing');

for (let i = 0; i < clothing.length; i++) {
    const clothingResult = clothing[i];
    const dom = renderClothes(clothingResult);
    list.appendChild(dom);
}

