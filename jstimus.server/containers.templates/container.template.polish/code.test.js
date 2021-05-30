const { convCorrect, calcCorrect } = require("./mainCorrect.js");
const { conv, calc } = require('./mainSolution.js');

describe('Conv function', () => {
    test('5 + 4', () => {
        const expression = '5 + 4';
        const postfixCorrect = convCorrect(expression);
        const postfixTest = conv(expression);
        expect(postfixTest).toBe(postfixCorrect);
    });
    test('-4 + 5', () => {
        const expression = '-4 + 5';
        const postfixCorrect = convCorrect(expression);
        const postfixTest = conv(expression);
        expect(postfixTest).toBe(postfixCorrect);
    });
    test('( 1 + 2 ) * 3', () => {
        const expression = '( 1 + 2 ) * 3';
        const postfixCorrect = convCorrect(expression);
        const postfixTest = conv(expression);
        expect(postfixTest).toBe(postfixCorrect);
    });
    test('2 ^ 3 ^ 2', () => {
        const expression = '2 ^ 3 ^ 2';
        const postfixCorrect = convCorrect(expression);
        const postfixTest = conv(expression);
        expect(postfixTest).toBe(postfixCorrect);
    });
    test('2 ^ ( 3 ^ 2 )', () => {
        const expression = '2 ^ ( 3 ^ 2 )';
        const postfixCorrect = convCorrect(expression);
        const postfixTest = conv(expression);
        expect(postfixTest).toBe(postfixCorrect);
    });

    test('( 8 + 2 * 5 ) / ( 1 + 3 * 2 - 4 ) - 5 + ( 9 / ( 1 + 2 ) + 1 ) * 3', () => {
        const expression = '( 8 + 2 * 5 ) / ( 1 + 3 * 2 - 4 ) - 5 + ( 9 / ( 1 + 2 ) + 1 ) * 3';
        const postfixCorrect = convCorrect(expression);
        const postfixTest = conv(expression);
        expect(postfixTest).toBe(postfixCorrect);
    });
});

describe('Calc function', () => {
    test('5 + 4', () => {
        const expression = '5 + 4';
        const postfixCorrect = convCorrect(expression);
        const cCorrect = calcCorrect(postfixCorrect);
        const calcTest = calc(postfixCorrect);
        expect(calcTest).toBe(cCorrect);
    });
    test('-4 + 5', () => {
        const expression = '-4 + 5';
        const postfixCorrect = convCorrect(expression);
        const cCorrect = calcCorrect(postfixCorrect);
        const calcTest = calc(postfixCorrect);
        expect(calcTest).toBe(cCorrect);
    });
    test('( 1 + 2 ) * 3', () => {
        const expression = '( 1 + 2 ) * 3';
        const postfixCorrect = convCorrect(expression);
        const cCorrect = calcCorrect(postfixCorrect);
        const calcTest = calc(postfixCorrect);
        expect(calcTest).toBe(cCorrect);
    });
    test('2 ^ 3 ^ 2', () => {
        const expression = '2 ^ 3 ^ 2';
        const postfixCorrect = convCorrect(expression);
        const cCorrect = calcCorrect(postfixCorrect);
        const calcTest = calc(postfixCorrect);
        expect(calcTest).toBe(cCorrect);
    });
    test('2 ^ ( 3 ^ 2 )', () => {
        const expression = '2 ^ ( 3 ^ 2 )';
        const postfixCorrect = convCorrect(expression);
        const cCorrect = calcCorrect(postfixCorrect);
        const calcTest = calc(postfixCorrect);
        expect(calcTest).toBe(cCorrect);
    });

    test('( 8 + 2 * 5 ) / ( 1 + 3 * 2 - 4 ) - 5 + ( 9 / ( 1 + 2 ) + 1 ) * 3', () => {
        const expression = '( 8 + 2 * 5 ) / ( 1 + 3 * 2 - 4 ) - 5 + ( 9 / ( 1 + 2 ) + 1 ) * 3';
        const postfixCorrect = convCorrect(expression);
        const cCorrect = calcCorrect(postfixCorrect);
        const calcTest = calc(postfixCorrect);
        expect(calcTest).toBe(cCorrect);
    });
});
