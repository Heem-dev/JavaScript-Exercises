const repeatString = function (string, num) {
  let fullString = "";
  if (num < 0) {
    return "ERROR";
  }
  for (i = 1; i <= num; i++) {
    fullString += string;
  }
  console.log(fullString);
  return fullString;
};

// Do not edit below this line
module.exports = repeatString;
