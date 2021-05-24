const { mainCorrect } = require("./mainCorrect.js");
const { main } = require('./mainSolution.js');

describe('Main function', () => {
    test('entropy of 33 equal symbols and 1 other', () => {
        const input = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab';
        const correct = mainCorrect(input);
        const test = main(input);
        expect(test).toBeCloseTo(correct, 8);
    });
    test('entropy of english alphabet', () => {
        const input = 'abcdefghijklmnopqrstuvwxyz';
        const correct = mainCorrect(input);
        const test = main(input);
        expect(test).toBeCloseTo(correct, 8);
    });
    test('entropy of lorem ipsum', () => {
        const input = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ' +
            'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ' +
            'ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum ' +
            'dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui ' +
            'officia deserunt mollit anim id est laborum.';
        const correct = mainCorrect(input);
        const test = main(input);
        expect(test).toBeCloseTo(correct, 8);
    });
    test('entropy of abcd', () => {
        const input = 'abcd';
        const correct = mainCorrect(input);
        const test = main(input);
        expect(test).toBeCloseTo(correct, 8);
    })
    test('entropy of abrakadabra', () => {
        const input = 'abrakadabra';
        const correct = mainCorrect(input);
        const test = main(input);
        expect(test).toBeCloseTo(correct, 8);
    });
    test('entropy of aaaaa', () => {
        const input = 'aaaaa';
        const correct = mainCorrect(input);
        const test = main(input);
        expect(test).toBeCloseTo(correct, 8);
    });
})
