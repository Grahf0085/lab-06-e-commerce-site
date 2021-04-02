import { findById } from './utils.js';

const BASKET = 'BASKET'; // why is this necessary?

export function getBasket() {
    const stringyBasket = localStorage.getItem('BASKET');

    const parsedBasket = JSON.parse(stringyBasket);

    if (parsedBasket) {
        return parsedBasket;
    }// why would just having a parsedBasket mean it's not empty?  I'll roll with it
    else {
        return [];
    }
}

export function setBasket(parsedBasket) {

    const stringyBasket = JSON.stringify(parsedBasket);

    localStorage.setItem(BASKET, stringyBasket);
}

export function addItemToBasket(productId, numberOrdered) {
    const basket = getBasket();

    const matchingItem = findById(productId, basket);

    if (matchingItem) {
        matchingItem.quantity += numberOrdered;
    }
    else {
        const lineItem = {
            id: productId,
            quantity: numberOrdered
        };
        basket.push(lineItem);
    }
    setBasket(basket);
}

export function clearBasket() {
    localStorage.removeItem(BASKET);
    window.location = '/';
}


