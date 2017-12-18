function echo(str) {
	return str
}

function shout(str) {
	return str.toUpperCase()
}

function repeat(str, n=2) {
	let newStr = str + ' '
	return newStr.repeat(n).trim()
}

function pieceOfWord(str, n) {
	return str.slice(0, n)
}

function firstWord(str) {
	let strArr = str.split(' ')
	return strArr[0]
}

function capitalize(word) {
	let littleWords = ['and', 'over', 'on', 'the']
	return (littleWords.includes(word)) ? word : word.charAt(0).toUpperCase() + word.slice(1)
	// This function just capitalizes the word given to it, use in conjunction with titleCreator
}

function titleCreator(str) {
	let strArr = str.split(' ')
	let newArray = []
	strArr.forEach(word => {
		newArray.push(capitalize(word))
	})
	let newArrayJoin = newArray.join(' ')
	return newArrayJoin.charAt(0).toUpperCase() + newArrayJoin.slice(1)
}

module.exports = {
	echo,
	shout,
	repeat,
	pieceOfWord,
	firstWord,
	titleCreator
}