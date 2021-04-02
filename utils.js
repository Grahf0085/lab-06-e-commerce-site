import { addItemToBasket } from './basket-api.js';

export function createFernsLi(fern) {

    const li = document.createElement('li');

    li.classList.add('fern');

    const pId = document.createElement('p');

    pId.classList.add('id');
    pId.textContent = fern.id;

    const pName = document.createElement('p');

    pName.classList.add('name');
    pName.textContent = fern.name;

    const image = document.createElement('img');

    image.src = fern.image;

    const pDescription = document.createElement('p');

    pDescription.classList.add('description');
    pDescription.textContent = fern.description;

    const pCategory = document.createElement('p');

    pCategory.classList.add('category');
    pCategory.textContent = fern.category;

    const pPrice = document.createElement('p');

    pPrice.classList.add('price');
    pPrice.textContent = fern.price;

    const button = document.createElement('button');

    button.addEventListener('click', () => {
        addItemToBasket(fern.id);
    });

    button.textContent = 'Add to Basket';

    li.append(pId, pName, image, pDescription, pCategory, pPrice, button);

    return li;
}

export function findById(id, array) {
    for (let item of array) {
        if (id === item.id) return item;
    }
}

export function calcItemTotal(quantity, unitCost) {
    return Math.round((quantity * unitCost) * 100) / 100;
}

export function calcOrderTotal(basketArray, fernArray) {
    let total = 0;

    for (let basketItem of basketArray) {

        const matchingFern = findById(basketItem.id, fernArray);
        const linePrice = calcItemTotal(basketItem.quantity, matchingFern.price);
        total += linePrice;
    }
    return total;
}