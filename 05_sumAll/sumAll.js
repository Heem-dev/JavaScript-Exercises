const sumAll = function (num1, num2) {
  let numAll = 0;
  const highestNum = Math.max(num1, num2);
  const lowestNum = Math.min(num1, num2);
  if (
    num1 < 0 ||
    num2 < 0 ||
    typeof num1 != "number" ||
    typeof num2 != "number"
  ) {
    return "ERROR";
  } else {
    for (i = highestNum; i <= highestNum && i >= lowestNum; i--) {
      // console.log(i);
      // console.log(numAll);
      numAll += i;
    }
    return numAll;
  }
};
// Do not edit below this line
module.exports = sumAll;
