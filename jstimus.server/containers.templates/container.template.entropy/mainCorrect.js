function mainCorrect(str) {
    let alph = [];
    let H=0;
    let count = 0;
    for (let i=0; i<str.length; i++) {
        alph[str.charAt(i)] = 0;
    }
    for(let i=0; i<str.length; i++) {
        alph[str.charAt(i)]++;
    }
    for (let i in alph){
        alph[i] = alph[i]/str.length;
        count++;
    }
    for (let i in alph) {
        H -= alph[i] * (Math.log(alph[i]));
    }
    if(count === 1) {
        return 0;
    }
    H/=Math.log(count);
    return H;
}

module.exports = { mainCorrect };
