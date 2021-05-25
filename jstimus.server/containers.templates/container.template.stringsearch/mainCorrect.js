function mainCorrect(str, template) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        let flag = 1;
        for (let m = 0; m < template.length; m++)
            if (template[m] !== str[i + m]){
                flag = 0;
                break;
            }
        if (flag === 1)
            result.push(i);
        else
            flag = 1;
    }
    return result.length ? result.map(item => item + 1).join(' ') : 0;
}

module.exports = { mainCorrect };
