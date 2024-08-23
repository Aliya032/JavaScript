function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (90 <= score) {
    return "A";
  } else if (80 <= score) {
    return "B";
  } else if (70 <= score) {
    return "C";
  } else if (60 <= score) {
    return "D";
  } else if (0 <= score) {
    return "F";
  }
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));
