const { conv, calc } = require('./mainSolution.js');

describe('Conv function', () => {
    test('3', () => {
        const number = '3';
        const convertedTest = conv(number);
        expect(convertedTest).toBe('0 10000000 10000000000000000000000');
    });
    test('1', () => {
        const number = '1';
        const convertedTest = conv(number);
        expect(convertedTest).toBe('0 01111111 00000000000000000000000');
    });
    test('3402823400000000000000000000000000000', () => {
        const number = '3402823400000000000000000000000000000';
        const convertedTest = conv(number);
        expect(convertedTest).toBe('0 11111000 01000111101011100001001');
    });
    test('340282360000000000000000000000000000000 must represents infinity', () => {
        const number = '340282360000000000000000000000000000000';
        const convertedTest = conv(number);
        expect(convertedTest).toBe('0 11111111 00000000000000000000000');
    });
    test('10 негритят must represents Nan', () => {
        const number = '10 негритят';
        const convertedTest = conv(number);
        expect(convertedTest).toBe('0 11111111 10000000000000000000000');
    });
    test('0', () => {
        const number = '0';
        const convertedTest = conv(number);
        expect(convertedTest).toBe('0 00000000 00000000000000000000000');
    });
    test('-0', () => {
        const number = '-0';
        const convertedTest = conv(number);
        expect(convertedTest).toBe('1 00000000 00000000000000000000000');
    });
    test('max denormalized', () => {
        const number = '0.00000000000000000000000000000000000001175494210697';
        const convertedTest = conv(number);
        expect(convertedTest).toBe('0 00000000 11111111111111111111111');
    });
    test('min denormalized', () => {
        const number = '-0.00000000000000000000000000000000000001175494210697';
        const convertedTest = conv(number);
        expect(convertedTest).toBe('1 00000000 11111111111111111111111');
    });
});

describe('Calc function', () => {
    test('1+2=3', () => {
        const str = '1+2';
        const convertedTest = calc(str);
        expect(convertedTest).toBe('0 10000000 10000000000000000000000');
    });

    test('1-2=-1', () => {
        const str = '1-2';
        const convertedTest = calc(str);
        expect(convertedTest).toBe('1 01111111 00000000000000000000000');
    });

    test('455.5-600.3', () => {
        const str = '455.5-600.3';
        const convertedTest = calc(str);
        expect(convertedTest).toBe('1 10000110 00100001100110011001101');
    });
});
