function codeCorrect(original)
{
	let i = 0;
	let n = 1;
	let res = "";
	let n_old = 0;
	while (i < original.length) {
		while(original.charAt(i) === original.charAt(i+n))
			n++;
		n_old = n;
		while(n > 127) {
			res += '#' + String.fromCharCode(127) + original.charAt(i);
			n -= 127;
		}
		if (n > 3) {
			res += '#' + String.fromCharCode(n) + original.charAt(i);
		}
		else {
			if (original.charAt(i) === "#") {
				res += '#' + String.fromCharCode(1) + original.charAt(i);
				n_old=1;
			}
			else res += original.substr(i,n);
		}
		i += n_old;
		n = 1;
	}

	return res;
}

function decodeCorrect(coded)
{
	let i = 0;
	let k = 0;
	let decoded = "";
	while (i < coded.length) {
		if (coded.charAt(i) === "#") {
			while (k < coded.charCodeAt(i+1)) {
				decoded += coded.charAt(i+2);
				k++;
			}
			i += 3;
			k = 0;
		}
		else {
			decoded += coded.charAt(i);
			i++;
		}
	}

	return decoded;
}

module.exports = { codeCorrect, decodeCorrect };
