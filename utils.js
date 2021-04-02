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
        addItemToBasket(fern.id, quantity.value);
    });

    button.textContent = 'Add to Basket';

    const quantity = document.createElement('select');

    quantity.options[0] = new Option('One', 1);
    quantity.options[1] = new Option('Two', 2);
    quantity.options[2] = new Option('Three', 3);
    quantity.options[3] = new Option('Four', 4);
    quantity.options[4] = new Option('Five', 5);
    quantity.options[5] = new Option('Six', 6);
    quantity.options[6] = new Option('Seven', 7);
    quantity.options[7] = new Option('Eight', 8);
    quantity.options[8] = new Option('Nine', 9);
    quantity.options[9] = new Option('Ten', 10);

    li.append(pId, pName, image, pDescription, pCategory, pPrice, quantity, button);

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