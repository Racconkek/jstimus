function FloatNumber(sign, order, mantiss) {
    this.sign = sign;
    this.order = order;
    this.mantiss = mantiss;
    this.toString = function () {
        return this.sign + ' ' + this.order + ' ' + this.mantiss;
    }
}

function _intPartToBin(intPart)
{
    let count = 0;
    let binArr = [];
    if (intPart >=1)
    {
        while (intPart > 1 && count < 127)
        {
            binArr.push(intPart % 2);
            intPart = Math.floor(intPart / 2);
            count++;
        }
        binArr.push(1);
    }
    else if (intPart === 0)
    {
        binArr.push(0);
    }
    binArr.reverse();
    return binArr.join('');
}

function fractionToBin (frPart)
{
    let count = 0;
    let binArr = [];

    while (frPart!==0 && count < 149)
    {
        binArr.push(Math.floor((frPart*20)/10));
        frPart =((frPart*20)%10)/10;
        count++;
    }
    return binArr.join('');
}

function makeOrderInFloat(order)
{
    order+=127;
    order = order.toString(2);
    let n = order.length;
    while(n<8)
    {
        order = '0'+order;
        n++
    }
    return order;
}

function convCorrect(str) {
    let converted = convertToFloat(str);
    return converted.toString();
}

function convertToFloat(str) {
    let sign = 0;
    let order = 0;
    let mantiss = 0;

    if (str.charAt(0) === '-')
    {
        str = str.substr(1);
        sign = 1;
    }

    if (str > (2-Math.pow(2,-23))*Math.pow(2, 127)) //Если больше возможного
    {
        return new FloatNumber(sign, '11111111', '00000000000000000000000');
    }

    if (isNaN(str)) //Не число
    {
        return new FloatNumber('0', '11111111', '10000000000000000000000');
    }

    if (str === '0') // Если ноль
    {
        return new FloatNumber(sign, '00000000', '00000000000000000000000');
    }

    if (Number(str) < Math.pow(2, -126)) //Денормализованные числа
    {
        order = makeOrderInFloat(-127);
        let denorm = fractionToBin(str).substr(126);
        let n = denorm.length;
        while (n < 23)
        {
            denorm += '0';
            n++;
        }

        return new FloatNumber(sign, order, denorm);
    }

    let intPart = 0;
    let frPart = 0;
    if (str.indexOf('.')!== -1) //Если число дробное
    {
        let num = str.split('.');
        intPart = num[0];
        frPart = num[1];
        frPart = '0.' + frPart;
    }
    else
    {
        intPart = str;
    }

    intPart = _intPartToBin(intPart);
    frPart = fractionToBin(frPart);
    let num = intPart + '.' + frPart;
    if (intPart === '0')
    {
        let i = 2;
        while (i < num.length)
        {
            if (num.charAt(i) === '1')
            {
                order = -(i-1);
                break;
            }
            i++;
        }

        num = num.charAt(intPart.length-order) + '.' + num.substr(-order + 2);
    } //привели к виду 1.ххх * 10^y

    else
    {
        let n = intPart.length;
        while (n > 1)
        {
            order++;
            n--;
        }
        num = '1' + '.' + num.substr(1, intPart.length-1) + frPart;
    }

    order = makeOrderInFloat(order);
    mantiss = num.substr(2,23);
    let n = mantiss.length;
    while (n < 23)
    {
        mantiss += '0';
        n++;
    }

    return new FloatNumber(sign, order, mantiss);
}

function calcCorrect(str) {
    let memory = str.split(/[+-]/);
    let f1 = convertToFloat(memory[0].toString());
    let f2 = convertToFloat(memory[1].toString());
    let operation = str.match(/[+-]/)[0];
    let result;
    if (operation === "+")
    {
        result = getSum(f1,f2);
    }
    else if (operation === "-")
    {
        result = getSub(f1, f2);
    }

    return result.toString();
}

function getSum(float1, float2)
{
    let { mant1, mant2, order } = alignmentOrders(float1, float2);

    let sum = [];
    let nextOrd = 0;
    for (let i = mant1.length -1; i>=0; i--)
    {
        if (mant1[i]+mant2[i] === 2)
        {
            sum.push(nextOrd);
            nextOrd = 1;
        }
        else if (mant1[i]+mant2[i] === 1)
        {
            sum.push(1 - nextOrd);
        }
        else if (mant1[i]+mant2[i] === 0)
        {
            sum.push(nextOrd);
            nextOrd = 0;
        }
    }

    if (nextOrd !== 0)
        sum.push(nextOrd);

    sum.reverse();
    while (sum.length > 24)
    {
        order++;
        sum.pop();
    }
    order = makeOrderInFloat(order);
    sum.shift();

    return new FloatNumber(0, order, sum.join(''));
}

function getSub(float1, float2)
{
    let sign = 0;
    if (float2>float1)
    {
        let t = float2;
        float2 = float1;
        float1 = t;
        sign = 1;
    }
    let { mant1, mant2 } = alignmentOrders(float1, float2);

    let sub = [];
    for (let i = mant1.length -1; i>=0; i--)
    {
        if (mant1[i]-mant2[i] === 0)
        {
            sub.push(0);
        }
        else if (mant1[i]-mant2[i] === 1)
        {
            sub.push(1);
        }
        else if (mant1[i]-mant2[i] === -1)
        {
            sub.push(1);
            for (let j = 1; j < mant1.length - i; j++)
            {
                if (mant1[i-j] === 1)
                {
                    mant1[i-j] = 0;
                    break;
                }
                else
                    mant1[i-j] = 1;
            }
        }
    }

    sub.reverse();
    let order = parseInt(float1.order, 2) - 127;
    while (sub[0] !== 1)
    {
        order--;
        sub.shift();
        sub.push(0);
    } //Приведение к научной нотации
    sub.shift();
    order = makeOrderInFloat(order);
    return new FloatNumber(sign, order, sub.join(''));
}

function alignmentOrders(float1, float2)
{
    let mant1 = mantissToArr(float1);
    let mant2 = mantissToArr(float2);
    let order = 0;
    if (float1.order === float2.order)
    {
        order = parseInt(float1.order, 2) -127;
    }
    else
    {
        if (float1.order > float2.order)
        {
            order = parseInt(float1.order, 2) -127;
            for (let j = 0; j < parseInt(float1.order, 2) - parseInt(float2.order, 2); j++)
            {
                mant2.pop();
                mant2.unshift(0);
            }
        }
        else
        {
            order = parseInt(float2.order, 2) -127;
            for (let j = 0; j < parseInt(float2.order, 2) - parseInt(float1.order, 2); j++)
            {
                mant1.pop();
                mant1.unshift(0);
            }
        }
    }

    return { mant1, mant2, order };
}

function mantissToArr(num) {
    let mant = num.mantiss.split('');
    mant.unshift('1');
    return mant.map(x => parseInt(x));
}

module.exports = { convCorrect, calcCorrect };