const { cipherCorrect, decipherCorrect } = require('./mainCorrect.js');
const { cipher, decipher } = require('./mainSolution.js');
const testText = require('./testText.js');

describe('Cipher function', () => {
    test('N = 1', () => {
        const n = 1;
        const testText = 'aaaa';
        const cipheredCorrect = cipherCorrect(testText, n);
        const cipherTest = cipher(testText, n);
        expect(cipherTest).toBe(cipheredCorrect);
    });
    test('N = 2', () => {
        const n = 2;
        const testText = 'abcdefghijklmnopqrstuvwxyz';
        const cipheredCorrect = cipherCorrect(testText, n);
        const cipherTest = cipher(testText, n);
        expect(cipherTest).toBe(cipheredCorrect);
    });
    test('N = 5 and russian text', () => {
        const n = 5;
        const testText = 'Съешь ещё этих мягких французских булок, да выпей чаю';
        const cipheredCorrect = cipherCorrect(testText, n);
        const cipherTest = cipher(testText, n);
        expect(cipherTest).toBe(cipheredCorrect);
    });
    test('N = 5 and english text', () => {
        const n = 5;
        const testText = 'The quick brown fox jumps over the lazy dog';
        const cipheredCorrect = cipherCorrect(testText, n);
        const cipherTest = cipher(testText, n);
        expect(cipherTest).toBe(cipheredCorrect);
    });
    test('N = 36', () => {
        const n = 36;
        const testText = 'The quick brown fox jumps over the lazy dog';
        const cipheredCorrect = cipherCorrect(testText, n);
        const cipherTest = cipher(testText, n);
        expect(cipherTest).toBe(cipheredCorrect);
    });
    test('N = -22', () => {
        const n = -22;
        const testText = 'The quick brown fox jumps over the lazy dog';
        const cipheredCorrect = cipherCorrect(testText, n);
        const cipherTest = cipher(testText, n);
        expect(cipherTest).toBe(cipheredCorrect);
    });
    // test.skip('N = 5 and Harry Potter as a test text', () => {
    //     const n = 5;
    //     const cipheredCorrect = cipherCorrect(testText, n);
    //     const cipherTest = cipher(testText, n);
    //     expect(cipherTest).toBe(cipheredCorrect);
    // });
});


describe('Decipher function', () => {
    test('N = 36', () => {
        const n = 36;
        const cipheredCorrect = cipherCorrect(testText, n);
        const cipherTest = cipher(testText, n);
        const decipheredCorrect = decipherCorrect(cipheredCorrect);
        const decipheredTest = decipher(cipherTest);
        expect(decipheredTest).toBe(decipheredCorrect);
    });
    test('N = -22', () => {
        const n = -22;
        const cipheredCorrect = cipherCorrect(testText, n);
        const cipherTest = cipher(testText, n);
        const decipheredCorrect = decipherCorrect(cipheredCorrect);
        const decipheredTest = decipher(cipherTest);
        expect(decipheredTest).toBe(decipheredCorrect);
    });
    test('N = 5 and Harry Potter as a test text', () => {
        const n = 5;
        const cipheredCorrect = cipherCorrect(testText, n);
        const cipherTest = cipher(testText, n);
        const decipheredCorrect = decipherCorrect(cipheredCorrect);
        const decipheredTest = decipher(cipherTest);
        expect(decipheredTest).toBe(decipheredCorrect);
    });
});
