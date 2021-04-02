import { calcItemTotal } from './utils.js';

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