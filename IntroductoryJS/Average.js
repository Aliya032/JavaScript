function getAverage(scores) {
  var sum = 0;
  var len = scores.length;
  var result = 0;
  var i = 0;
  while (i < len) {
    sum = sum + scores[i++];
  }
  result = sum / len;
  return result;
}

var answer = getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]);
console.log(answer);
var answer2 = getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]);
console.log(answer2);
