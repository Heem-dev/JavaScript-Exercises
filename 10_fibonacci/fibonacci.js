const fibonacci = function (num) {
  num = parseFloat(num);
  const indexRequested = num;
  // return oops if negative number
  if (num < 0) return "OOPS";
  if (num == 0) return 0;
  let fibNums = [1, 1, 2];

  // we make a loop to generate numbers needed to reach the requested index
  // we use num>3 cuz we already have 3 numbers in the array so no need to generate unneeded numbers
  while (num > 3) {
    num--;
    fibNums.push(fibNums.at(-1) + fibNums.at(-2));
  }
  console.log(indexRequested);
  console.log(fibNums);
  return fibNums[indexRequested - 1];
};

// Do not edit below this line
module.exports = fibonacci;
