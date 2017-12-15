let sumAll = function(a, b) {
	let newArray = createArray(a, b)
	if ((typeof a == 'string' || a < 0 || isNaN(a)) || (typeof b == 'string' || b < 0 || isNaN(b))) {
			return 'ERROR'
		} else {
			return newArray.reduce(getSum)
		}
}

function getSum(a, b) {
	return a + b
}

function createArray(a, b) {
	let arrayRange = new Array(b)
	let newArray = []
	let i = a

	if (a < b) {
		for(i; i <= arrayRange.length; i++) { newArray.push(i) }
	} else if (a > b) {
		for(i; i >= arrayRange.length; i--) { newArray.push(i) }
	}
	return newArray
}

module.exports = sumAll