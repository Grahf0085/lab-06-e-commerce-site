import { createFernsLi } from '../utils.js';
import { ferns } from '../ferns.js';

const ul = document.querySelector('.fern-list');

for (let fern of ferns) {
    const li = createFernsLi(fern);
    ul.append(li);
}