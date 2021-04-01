import { findById } from './utils.js';

const BASKET = 'basket'; // wby is this necessary?

export function getBasket() {
    const stringyBasket = localStorage.getItem('BASKET');

    const parsedBasket = JSON.parse(stringyBasket);

    if (parsedBasket) return parsedBasket; // why would just having a parsedBasket mean it's not empty?  I'll roll with it
    else return [];
}

export function addItemToCart(productId) {
    const basket = getBasket();

    const matchingItem = findById(productId, basket);

    if (matchingItem) basket.quantity++;
    else {
        const lineItem = {
            id: productId,
            quantity: 1
        };
        basket.push(lineItem);
    }
}

export function setBasket(parsedBasket) {

    const stringyBasket = JSON.stringify(parsedBasket);

    localStorage.setItem(BASKET, stringyBasket);
}
