function add(a, b) {
	return a + b
}

function subtract(a, b) {
	return a - b
}

function sum(arr) {
	if (arr == '') return 0
	if (arr.length == 1) return arr[0]

	return arr.reduce(add)
}

function multiply(arr) {
	return arr.reduce(getMultiply)
}

function power(a, b) {
	return a ** b
}

function factorial(n) {
	if (n <= 2) return n
	let newArray = []
	for(i = 1; i <= n; i++) {
		newArray.push(i)
	}
	return newArray.reduce(getMultiply)
}

function getMultiply(a, b) {
	return a * b
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}