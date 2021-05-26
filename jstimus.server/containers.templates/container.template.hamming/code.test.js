const { codeCorrect, decodeCorrect } = require("./mainCorrect.js");
const { code, decode } = require('./mainSolution.js');

describe('Code function', () => {
    test('0000', () => {
        const input = '0000';
        const codedCorrect = codeCorrect(input);
        const codedTest = code(input);
        expect(codedTest).toBe(codedCorrect);
    });
    test('0001', () => {
        const input = '0001';
        const codedCorrect = codeCorrect(input);
        const codedTest = code(input);
        expect(codedTest).toBe(codedCorrect);
    });
    test('0010', () => {
        const input = '0010';
        const codedCorrect = codeCorrect(input);
        const codedTest = code(input);
        expect(codedTest).toBe(codedCorrect);
    });
    test('0100', () => {
        const input = '0100';
        const codedCorrect = codeCorrect(input);
        const codedTest = code(input);
        expect(codedTest).toBe(codedCorrect);
    });
    test('1000', () => {
        const input = '1000';
        const codedCorrect = codeCorrect(input);
        const codedTest = code(input);
        expect(codedTest).toBe(codedCorrect);
    });
    test('0011', () => {
        const input = '0011';
        const codedCorrect = codeCorrect(input);
        const codedTest = code(input);
        expect(codedTest).toBe(codedCorrect);
    });
    test('1010', () => {
        const input = '1010';
        const codedCorrect = codeCorrect(input);
        const codedTest = code(input);
        expect(codedTest).toBe(codedCorrect);
    });    test('1110', () => {
        const input = '0000';
        const codedCorrect = codeCorrect(input);
        const codedTest = code(input);
        expect(codedTest).toBe(codedCorrect);
    });    test('1111', () => {
        const input = '1111';
        const codedCorrect = codeCorrect(input);
        const codedTest = code(input);
        expect(codedTest).toBe(codedCorrect);
    });    test('1100', () => {
        const input = '1100';
        const codedCorrect = codeCorrect(input);
        const codedTest = code(input);
        expect(codedTest).toBe(codedCorrect);
    });    test('0110', () => {
        const input = '0110';
        const codedCorrect = codeCorrect(input);
        const codedTest = code(input);
        expect(codedTest).toBe(codedCorrect);
    });
});

function replaceCharAt(str, index, c) {
    return str.substring(0, index) + c + str.substring(index + 1);
}

function replaceChar(c) {
    return c === '1' ? '0' : '1';
}

describe('Decode function', () => {
    test('0000, no errors', () => {
        const input = '0000';
        const codedCorrect = codeCorrect(input);
        const codedTest = code(input);
        const decodedCorrect = decodeCorrect(codedCorrect);
        const decodedTest = decode(codedTest);
        expect(decodedTest).toBe(decodedCorrect);
    });
    test('0001, no errors', () => {
        const input = '0001';
        const codedCorrect = codeCorrect(input);
        const codedTest = code(input);
        const decodedCorrect = decodeCorrect(codedCorrect);
        const decodedTest = decode(codedTest);
        expect(decodedTest).toBe(decodedCorrect);
    });
    test('0010, no errors', () => {
        const input = '0010';
        const codedCorrect = codeCorrect(input);
        const codedTest = code(input);
        const decodedCorrect = decodeCorrect(codedCorrect);
        const decodedTest = decode(codedTest);
        expect(decodedTest).toBe(decodedCorrect);
    });
    test('0100, error on position 1', () => {
        const input = '0100';
        const index = 0;
        const coded = codeCorrect(input);
        const codedError = replaceCharAt(coded, index, replaceChar(coded[index]));
        const decodedCorrect = decodeCorrect(codedError);
        const decodedTest = decode(codedError);
        expect(decodedTest).toBe(decodedCorrect);
    });
    //!
    test('1000, error on position 2', () => {
        const input = '1000';
        const index = 1;
        const coded = codeCorrect(input);
        const codedError = replaceCharAt(coded, index, replaceChar(coded[index]));
        const decodedCorrect = decodeCorrect(codedError);
        const decodedTest = decode(codedError);
        expect(decodedTest).toBe(decodedCorrect);
    });
    test('0011, error on position 3', () => {
        const input = '0011';
        const index = 2;
        const coded = codeCorrect(input);
        const codedError = replaceCharAt(coded, index, replaceChar(coded[index]));
        const decodedCorrect = decodeCorrect(codedError);
        const decodedTest = decode(codedError);
        expect(decodedTest).toBe(decodedCorrect);
    });
    test('1010, error on position 4', () => {
        const input = '1010';
        const index = 3;
        const coded = codeCorrect(input);
        const codedError = replaceCharAt(coded, index, replaceChar(coded[index]));
        const decodedCorrect = decodeCorrect(codedError);
        const decodedTest = decode(codedError);
        expect(decodedTest).toBe(decodedCorrect);
    });
    test('1110, error on position 5', () => {
        const input = '0000';
        const index = 4;
        const coded = codeCorrect(input);
        const codedError = replaceCharAt(coded, index, replaceChar(coded[index]));
        const decodedCorrect = decodeCorrect(codedError);
        const decodedTest = decode(codedError);
        expect(decodedTest).toBe(decodedCorrect);
    });
    test('1111, error on position 6', () => {
        const input = '1111';
        const index = 5;
        const coded = codeCorrect(input);
        const codedError = replaceCharAt(coded, index, replaceChar(coded[index]));
        const decodedCorrect = decodeCorrect(codedError);
        const decodedTest = decode(codedError);
        expect(decodedTest).toBe(decodedCorrect);
    });
    test('1100, error on position 7', () => {
        const input = '1100';
        const index = 6;
        const coded = codeCorrect(input);
        const codedError = replaceCharAt(coded, index, replaceChar(coded[index]));
        const decodedCorrect = decodeCorrect(codedError);
        const decodedTest = decode(codedError);
        expect(decodedTest).toBe(decodedCorrect);
    });
});
