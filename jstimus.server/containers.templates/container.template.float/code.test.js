const { conv, calc } = require('./mainSolution.js');

describe('Conv function', () => {
    test('3', () => {
        const number = '3';
        const convertedTest = conv(number);
        expect(convertedTest).toBe('');
    });
    test('340282340000000000000000000000000000000', () => {
        const number = '340282340000000000000000000000000000000';
        const convertedTest = conv(number);
        expect(convertedTest).toBe('01111111011111111111111111111111');
    });
    test('340282360000000000000000000000000000000 must represents infinity', () => {
        const number = '340282360000000000000000000000000000000';
        const convertedTest = conv(number);
        expect(convertedTest).toBe('01111111100000000000000000000000');
    });
    test('10 негритят must represents Nan', () => {
        const number = '10 негритят';
        const convertedTest = conv(number);
        expect(convertedTest).toBe('01111111110000000000000000000000');
    });
});

describe('Calc function', () => {

});
