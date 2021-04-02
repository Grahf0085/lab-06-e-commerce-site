import { calcItemTotal } from '../utils.js';
import { getBasket, clearBasket } from '../basket-api.js';

const basket = getBasket();

const button = document.querySelector('button');
button.disabled = false;

export function renderLineItems(basketItem, fern) {

    const newTr = document.createElement('tr');
    const tName = document.createElement('td');
    const tQuantity = document.createElement('td');
    const tPrice = document.createElement('td');

    tName.textContent = fern.name;
    tQuantity.textContent = basketItem.quantity;
    const total = calcItemTotal(basketItem.quantity, fern.price);
    tPrice.textContent = total;

    newTr.append(tName, tQuantity, tPrice);

    return newTr;
}

if (basket.length === 0) button.disabled = true;

button.addEventListener('click', () => {
    alert(JSON.stringify(basket, true, 2));
    clearBasket();
});




