function codeCorrect(input) {
    let arr = input.split('');
    let result = input;
    for (let i = 0; i < 4; i++) {
        arr[i] = parseFloat(arr[i]);
    }
    let sum = 0;
    for (let i = 0; i < 3; i++) {
        if (i !== 2)
            sum += arr[i] + arr[i + 1] + arr[i + 2];
        else
            sum += arr[i] + arr[i + 1] + arr[0];
        if (sum % 2 !== 0)
            result += 1;
        else
            result += 0;
        sum = 0;
    }

    return result;
}

function decodeCorrect(input) {
    let decode = "";
    let code = input.split('');
    for (let i = 0; i < code.length; i++) {
        code[i] = parseFloat(code[i]);
    }

    let checkPointer = [];
    for (let i = 0; i < 3; i++)
        checkPointer[i] = 0
    for (let i = 0; i < 3; i++) {
        let tempIndex = i + 2;
        if (i === 2)
            tempIndex = 0;
        if ((code[i] + code[i + 1] + code[tempIndex] + code[i + 4]) % 2 === 0)
            checkPointer[i] = 1;
        else checkPointer[i] = 0;
    }

    if ((checkPointer[0] === 1) && (checkPointer[1] === 1) && (checkPointer[2] === 1)) {
        return input + ' 0';
    }

    let errorIndex = 0;
    if (checkPointer[0] === 1) {
        if ((checkPointer[1] === 1) && (checkPointer[2] === 0))
            errorIndex = 6;
        else {
            if (checkPointer[2] === 0)
                errorIndex = 3;
            else
                errorIndex = 5;
        }
    }
    else {
        if (checkPointer[1] === 1) {
            if (checkPointer[2] === 1)
                errorIndex = 4;
            else
                errorIndex = 0;
        }
        else
        if (checkPointer[2] === 1)
            errorIndex = 1;
        else
            errorIndex = 2;
    }
    code[errorIndex] = code[errorIndex] ^ 1;
    errorIndex++;
    return code.join('') + ' ' + errorIndex;
}

module.exports = { codeCorrect, decodeCorrect };
