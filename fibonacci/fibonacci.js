var fibonacci = function(n) {
	if (n < 0) return 'OOPS'
	if (typeof n == 'integer') return parseInt(n)

	let fibonacciArray = getFibonacci(n)

	return fibonacciArray.slice(-1)[0]
}

module.exports = fibonacci


function getFibonacci(n) {
	let array = [1, 1]
	let newArray = []
	//n-2 because we already have 2 elements in array
	for(x = 0; x < n-2; x++) {
		let sumNum = array[x] + array[x+1]
		array.push(sumNum)
	}
	return array
}