//a-z 97-122
//A-Z 65-90
//special chars 32-64
//string.charCodeAt(n) converts str to ascii String.fromCharCode(n) the inverse
var caesar = function(str, n) {
	if (n < 0) return caesar(str, n + 26)

	let result = ''

	for (i = 0; i < str.length; i++) {
		let chara = str[i]

		if (chara.match(/[a-z]/i)) {		//ignoring special chars
			let ascii = str.charCodeAt(i)

			if ((ascii >= 65) && (ascii <= 90)) { 				// Uppercase letters
				chara = String.fromCharCode(((ascii - 65 + n) % 26) + 65)
			} else if ((ascii >= 97) && (ascii <= 122)) {			// Lowercase letters
				chara = String.fromCharCode(((ascii - 97 + n) % 26) + 97)
			}
		}
		result += chara
	}
	return result
}

module.exports = caesar


