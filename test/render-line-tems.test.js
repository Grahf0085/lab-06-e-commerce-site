import { renderLineItems } from '../renderLineFunction.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<tr><td>Polystichum munitum</td><td>15</td><td>525</td></tr>';
    const cartItem = { id: 'Sword Fern', quantity: 15 };

    const product = {
        id: 'Sword Fern',
        name: 'Polystichum munitum',
        image: 'http://wherewaterfalls.com/wp-content/uploads/2015/04/Sword+fern.JPGimgmax=1024.jpg',
        description: 'The sword fern plant is a lush, evergreen ground cover known for its bright green, sword-shaped fronds. You’ll find the young fronds, or fiddleheads, appearing in early spring from their underground rhizomes with most plants eventually reaching 4 to 6 feet (1 to 2 m.) long. In addition to spreading through rhizomes, sword ferns will also reproduce via spores that are found along the backside of the fronds. These spores appear as brown spots, which are clustered together in groups.',
        category: 'Dryopteridacea',
        price: '35',
    };
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderLineItems(cartItem, product);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected, 'render linetest');
});
