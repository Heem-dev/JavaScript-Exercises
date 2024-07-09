const sumAll = function (num1, num2) {
  let numAll = 0;

  for (i = num2; i <= num2 && i >= num1; i--) {
    console.log(i);
    console.log(numAll);
    numAll += i;
  }
  return numAll;
};

// Do not edit below this line
module.exports = sumAll;
