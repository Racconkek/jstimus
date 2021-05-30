const priority = {
    "^" : 3, // возведение в степень, потому что ^ никак не хочет добавляться в массив
    "*" : 2,
    "/" : 2,
    "+" : 1,
    "-" : 1,
    "(" : 0,
    ")" : 0
};

const operators = {
    "^": (x, y) => Math.pow(y, x),
    "*": (x, y) => y * x,
    "/": (x, y) => y / x,
    "+": (x, y) => y + x,
    "-": (x, y) => y - x
};

function convCorrect(str) {
    let splitedStr = str.split(' ');
    let stack = [];
    let resultArr = [];
    let resultString = "";

    for (let i = 0; i < splitedStr.length; i++) {
        if (splitedStr[i] === "(") {
            stack.push(splitedStr[i]);
            continue;
        }
        if (splitedStr[i] === ")") {
            while (stack[stack.length - 1] !== "(") {
                resultArr.push(stack.pop());
            }
            stack.pop(); //убираем скобоньку
            continue;
        }
        if (!(splitedStr[i] in priority)) { //чиселко
            resultArr.push(splitedStr[i]);
        }
        else {
            if (stack.length === 0) {
                stack.push(splitedStr[i]);
            }
            else {
                if (priority[splitedStr[i]] > priority[stack[stack.length - 1]]) {
                    stack.push(splitedStr[i]);
                } else {
                    while (stack.length !== 0) {
                        if (stack[stack.length - 1] === "(")
                            break;
                        resultArr.push(stack.pop());
                    }
                    stack.push(splitedStr[i]);
                }
            }
        }
    }

    while (stack.length !== 0) {
        resultArr.push(stack.pop());
    }

    return resultArr.join(' ');
}

function calcCorrect(str){
    const stack = [];
    const resultArr = str.split(' ');
    for (let i = 0; i < resultArr.length; i++)
    {
        if (!(resultArr[i] in operators)) {
            stack.push(resultArr[i])
        } else {
            let x = Number(stack.pop());
            let y = Number(stack.pop());
            stack.push(operators[resultArr[i]](x, y))
        }
    }

    return stack.pop();
}


module.exports = { convCorrect, calcCorrect };
