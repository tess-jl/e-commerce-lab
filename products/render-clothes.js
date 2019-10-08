function renderClothes(clothing) {
    const li = document.createElement('li');
    li.className = clothing.category;
    li.title = clothing.description;

    const h3 = document.createElement('h3');
    h3.textContent = clothing.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = clothing.image;
    img.alt = clothing.name + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const usd = clothing.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    const priceTextNode = document.createTextNode(usd);
    p.appendChild(priceTextNode);
    
    const button = document.createElement('button');
    button.textContent = 'add to cart';
    button.value = clothing.id;
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default renderClothes;