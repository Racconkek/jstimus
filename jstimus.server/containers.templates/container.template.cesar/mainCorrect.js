function cipherCorrect(original, shift) {
    let encodedString = "";
    const alphabetLower = "abcdefghijklmnopqrstuvwxyz";
    const alphabetUpper = alphabetLower.toUpperCase();

    shift = shift < 0 ? alphabetLower.length + (shift % alphabetLower.length) : shift % alphabetLower.length;

    for (let i = 0; i < original.length; i++) {
        let symbolLowerId = getId(alphabetLower, original.charAt(i));
        let symbolUpperId = getId(alphabetUpper, original.charAt(i));

        if (symbolLowerId !== -1)
            encodedString += alphabetLower.charAt((alphabetLower.length + symbolLowerId + shift) % alphabetLower.length);
        else if(symbolUpperId !== -1)
            encodedString += alphabetUpper.charAt((alphabetLower.length + symbolUpperId + shift) % alphabetLower.length);
        else
            encodedString += original[i];
    }
    return encodedString;
}

function getId(string, symbol) {
    for(let i = 0; i < string.length; i++)
    {
        if(string[i] === symbol)
            return i;
    }
    return -1;
}

function decipherCorrect(cipheredOriginal) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    const alphabetFreq = [0.0817, 0.0149, 0.0278, 0.0425, 0.1270, 0.0223, 0.0202, 0.0609, 0.0697, 0.0015, 0.0077,
        0.0403, 0.0241, 0.0675, 0.0751, 0.0193, 0.0010, 0.0599, 0.0633, 0.0906,
        0.0276, 0.0098, 0.0236, 0.0015, 0.0197, 0.0007 ];

    const ciphered = cipheredOriginal.toLowerCase();

    let alph = [];
    let freq = []
    // получим таблицу частот для данного зашифрованного текста
    for (let i = 0; i < ciphered.length; i++) {
        if (freq[ciphered[i]] !== undefined)
            freq[ciphered[i]]++;
        else
            freq[ciphered[i]] = 1;
    }

    for (let i in freq) {
        freq[i] = freq[i] / ciphered.length;
    }

    // составляем соответствие буква -> эталонная частота и заменяем на 0 отсутствие частоты из полученного текста
    for (let i = 0; i < alphabet.length; i++) {
        alph[alphabet[i]] = alphabetFreq[i];
        if (freq[alphabet[i]] === undefined)
            freq[alphabet[i]] = 0;
    }

    // ищем подходящий сдвиг
    let min = Number.MAX_VALUE;
    let minShift = 0;

    for (let shift = 0; shift < alphabet.length; shift++) {
        let delta = 0;
        for (let i = 0; i < alphabet.length; i++) {
            delta += Math.pow(freq[alphabet[i]] - alph[alphabet[(i + shift) % alphabet.length]], 2);
        }
        if (delta < min) {
            min = delta;
            minShift = shift;
        }
    }

    return minShift;
}

module.exports = { cipherCorrect, decipherCorrect };
