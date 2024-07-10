const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let sumVal = 0;
  array.forEach((val) => {
    sumVal += val;
  });
  return sumVal;
};

const multiply = function (array) {
  let sumVal = 1;
  array.forEach((val) => {
    sumVal *= val;
  });
  return sumVal;
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (num) {
  let numFactorial = num;
  if (num == 0) return 1;

  while (num > 1) {
    num--;
    numFactorial = numFactorial * num;
  }
  return numFactorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
