var removeFromArray = function(arr) {
  var args = Array.prototype.slice.call(arguments);

  for (let i = 1; i < args.length; i++) {
    let removal = args[i];
    let j = 0;
    while(arr.length > 0 && j < arr.length) {
      if (arr[j] == removal) {
        arr.splice(j, 1);
      }
      j++;
    }
  } // end for args
  return arr;
}

module.exports = removeFromArray
