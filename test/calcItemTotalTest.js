import { calcItemTotal } from '../utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 10;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcItemTotal(2, 5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
