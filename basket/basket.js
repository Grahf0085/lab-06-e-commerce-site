//{ basket } from '../data/basket.js';
import { ferns } from '../ferns.js';
import { renderLineItems } from '../basket/render-line-items.js';
import { findById } from '../utils.js';
import { calcOrderTotal } from '../utils.js';
import { getBasket } from '../basket-api.js';

const basket = getBasket();
const table = document.querySelector('table');
const total = calcOrderTotal(basket, ferns);


for (let basketItem of basket) {

    const matchingFern = findById(basketItem.id, ferns);

    const tr = renderLineItems(basketItem, matchingFern);

    table.append(tr);
}


const newTr = document.createElement('tr');
const footerOne = document.createElement('td');
const footerTwo = document.createElement('td');
const footerThree = document.createElement('td');

footerOne.textContent = 'Total: ';
footerThree.textContent = `${total}`;

newTr.append(footerOne, footerTwo, footerThree);
table.append(newTr);
