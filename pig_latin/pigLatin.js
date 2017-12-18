function translate(str) {
	let vowels = /^[aeiou]/
	let consonant = /^[^aeiou]/
	let newWord = []

	str.split(' ').forEach(word => {
		if (vowels.test(word[0])) {
			return newWord.push(word + 'ay')
		} else if (consonant.test(word[0]) && word[1] == 'q' && word[2] == 'u') {
			return newWord.push(word.slice(3) + word[0] + word[1] + word[2] + 'ay')
		} else if (word[0] == 'q' && word[1] == 'u') {
			return newWord.push(word.slice(2) + word[0] + word[1] + 'ay')
		} else if (consonant.test(word[0]) && consonant.test(word[1]) && consonant.test(word[2])) {
			return newWord.push(word.slice(3) + word[0] + word[1] + word[2] + 'ay')
		} else if (consonant.test(word[0]) && consonant.test(word[1])) {
			return newWord.push(word.slice(2) + word[0] + word[1] + 'ay')
		} else if (consonant.test(word[0])) {
			return newWord.push(word.slice(1) + word[0] + 'ay')
		}
	})
	return newWord.join(' ')
}


module.exports = {
	translate
}

