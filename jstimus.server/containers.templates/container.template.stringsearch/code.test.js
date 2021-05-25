const { mainCorrect } = require("./mainCorrect.js");
const { main } = require('./mainSolution.js');
const testData = require('./testText.js');

describe('Main solution', () => {
    beforeAll(() => {

    })
    test('Find a in aaaaa', () => {
        const template = 'a';
        const str = 'aaaaa';
        const correct = mainCorrect(str, template);
        const test = main(str, template);
        expect(test).toBe(correct);
    });

    test('Find b in aaaaa', () => {
        const template = 'b';
        const str = 'aaaaa';
        const correct = mainCorrect(str, template);
        const test = main(str, template);
        expect(test).toBe(correct);
    });

    test('Find aa in aaaaa', () => {
        const template = 'aa';
        const str = 'aaaaa';
        const correct = mainCorrect(str, template);
        const test = main(str, template);
        expect(test).toBe(correct);
    });

    test('Find ana in ananas', () => {
        const template = 'ana';
        const str = 'ananas';
        const correct = mainCorrect(str, template);
        const test = main(str, template);
        expect(test).toBe(correct);
    });

    test('Harry Potter book word: wand', () => {
        const template = 'wand';
        const correct = mainCorrect(testData, template);
        const test = main(testData, template);
        expect(test).toBe(correct);
    });

    test('Harry Potter book word: Harry', () => {
        const template = 'Harry';
        const correct = mainCorrect(testData, template);
        const test = main(testData, template);
        expect(test).toBe(correct);
    });

    test('Harry Potter book word: Hogwarts', () => {
        const template = 'Hogwarts';
        const correct = mainCorrect(testData, template);
        const test = main(testData, template);
        expect(test).toBe(correct);
    });
})
