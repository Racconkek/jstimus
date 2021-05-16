const { codeCorrect, decodeCorrect } = require("./mainCorrect.js");
const { code, decode } = require('./mainSolution.js');

describe('Code function', () => {
    test('count of 33 symbols should be !', () => {
        const input = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
        const codedCorrect = codeCorrect(input);
        const codedTest = code(input);
        expect(codedTest).toBe(codedCorrect);
    });
    test('3 symbols should not be coded', () => {
        const input = 'aaa';
        const codedCorrect = codeCorrect(input);
        const codedTest = code(input);
        expect(codedTest).toBe(codedCorrect);
    });
    test('escape symbol should be coded always 1', () => {
        const input = '#';
        const codedCorrect = codeCorrect(input);
        const codedTest = code(input);
        expect(codedTest).toBe(codedCorrect);
    });
    test('escape symbol should be coded always 3', () => {
        const input = '###';
        const codedCorrect = codeCorrect(input);
        const codedTest = code(input);
        expect(codedTest).toBe(codedCorrect);
    });
    test('unprintable count symbol should be', () => {
        const input = 'aaaa';
        const codedCorrect = codeCorrect(input);
        const codedTest = code(input);
        expect(codedTest).toBe(codedCorrect);
    });
    test('string with length > 127 should be divided into parts', () => {
        const input = 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb';
        const codedCorrect = codeCorrect(input);
        const codedTest = code(input);
        expect(codedTest).toBe(codedCorrect);
    });
    test('difficult example', () => {
        const input = 'a' +
            'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb' +
            'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb' +
            '#' +
            'cc' +
            'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef####';
        const codedCorrect = codeCorrect(input);
        const codedTest = code(input);
        expect(codedTest).toBe(codedCorrect);
    });
});

describe('Decode function', () => {
    test('count of 33 symbols should be !', () => {
        const input = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
        const codedCorrect = codeCorrect(input);
        const decodedCorrect = decodeCorrect(codedCorrect);
        const codedTest = code(input);
        const decodedTest = decode(codedTest);
        expect(decodedTest).toBe(decodedCorrect);
    });
    test('3 symbols should not be coded', () => {
        const input = 'aaa';
        const codedCorrect = codeCorrect(input);
        const decodedCorrect = decodeCorrect(codedCorrect);
        const codedTest = code(input);
        const decodedTest = decode(codedTest);
        expect(decodedTest).toBe(decodedCorrect);
    });
    test('escape symbol should be coded always 1', () => {
        const input = '#';
        const codedCorrect = codeCorrect(input);
        const decodedCorrect = decodeCorrect(codedCorrect);
        const codedTest = code(input);
        const decodedTest = decode(codedTest);
        expect(decodedTest).toBe(decodedCorrect);
    });
    test('escape symbol should be coded always 3', () => {
        const input = '###';
        const codedCorrect = codeCorrect(input);
        const decodedCorrect = decodeCorrect(codedCorrect);
        const codedTest = code(input);
        const decodedTest = decode(codedTest);
        expect(decodedTest).toBe(decodedCorrect);
    });
    test('unprintable count symbol should be', () => {
        const input = 'aaaa';
        const codedCorrect = codeCorrect(input);
        const decodedCorrect = decodeCorrect(codedCorrect);
        const codedTest = code(input);
        const decodedTest = decode(codedTest);
        expect(decodedTest).toBe(decodedCorrect);
    });
    test('string with length > 127 should be divided into parts', () => {
        const input = 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb';
        const codedCorrect = codeCorrect(input);
        const decodedCorrect = decodeCorrect(codedCorrect);
        const codedTest = code(input);
        const decodedTest = decode(codedTest);
        expect(decodedTest).toBe(decodedCorrect);
    });
    test('difficult example', () => {
        const input = 'a' +
            'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb' +
            'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb' +
            '#' +
            'cc' +
            'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef####';
        const codedCorrect = codeCorrect(input);
        const decodedCorrect = decodeCorrect(codedCorrect);
        const codedTest = code(input);
        const decodedTest = decode(codedTest);
        expect(decodedTest).toBe(decodedCorrect);
    });
});
