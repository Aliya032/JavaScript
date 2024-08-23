// Generating random whole numbers within a range
// This formula gives a random whole number in the range from min to max.
///  Math.floor(Math.random() * (max - min + 1)) + min
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
