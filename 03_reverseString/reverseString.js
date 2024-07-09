const reverseString = function (string) {
  const splitLetters = string.split("");
  console.log(splitLetters);
  splitLetters.reverse();
  console.log(splitLetters);
  const joinedLetters = splitLetters.join("");
  console.log(joinedLetters);
  return joinedLetters;
};

// Do not edit below this line
module.exports = reverseString;
