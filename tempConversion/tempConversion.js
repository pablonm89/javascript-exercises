var ftoc = function(f) {
  let fareToCel = (f - 32) / 1.8
  return Math.round(fareToCel * 10) / 10
}

var ctof = function(c) {
  let celToFare = (c * 1.8) + 32
  return Math.round(celToFare * 10) / 10
}

module.exports = {
  ftoc,
  ctof
}
