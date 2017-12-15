var removeFromArray = function(arr, n) {
let numberIndex = arr.indexOf(n)
arr.splice(numberIndex, 1)
return arr
}

module.exports = removeFromArray
