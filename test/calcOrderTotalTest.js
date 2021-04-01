import { calcOrderTotal } from '../utils.js';
import { ferns } from '../ferns.js';
import { basket } from '../data/basket.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 162;

    //Act 
    // Call the function you're testing and set the result to a const

    const actual = calcOrderTotal(basket, ferns);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
