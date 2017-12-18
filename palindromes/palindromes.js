var palindromes = function(str) {
	let specialChars = /[\W_]/g
	let myStr = str.replace(specialChars, '').toLowerCase()
	let stringDownCase = myStr
	let stringReverse = myStr.split('').reverse().join('')

	return (stringDownCase == stringReverse) ? true : false
}

module.exports = palindromes
