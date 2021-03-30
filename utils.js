export function createFernsLi(fern) {

    const li = document.createElement('li');

    li.classList.add(fern);

    const pId = document.createElement('p');

    pId.classList.add('id');
    pId.textContent = fern.id;

    const pName = document.createElement('p');

    pName.classList.add('name');
    pName.textConent = fern.name;

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

    button.textContent = 'Add to Basket';

    li.append(pId, pName, image, pDescription, pCategory, pPrice, button);

    return li;
}