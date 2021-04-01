import { basket } from '../data/basket.js';
import { ferns } from '../ferns.js';
import { renderLineItems } from '../basket/render-line-items.js';
import { findById } from '../utils.js';
// import { calcOrderTotal } from '../utils.js';

const table = document.querySelector('table');
console.log(table);
for (let basketItem of basket) {

    const matchingFern = findById(basketItem.id, ferns);

    const tr = renderLineItems(basketItem, matchingFern);

    table.append(tr);
}

