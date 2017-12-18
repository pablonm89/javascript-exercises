var snakeCase = function(str) {
	let specialChars = /[\W_]/g
	let stringOnlySpaces = str.replace(specialChars, ' ').replace(/\s+/g, ' ').trim().replace(/\s/g, '_').toLowerCase()
	return stringOnlySpaces
}

module.exports = snakeCase
