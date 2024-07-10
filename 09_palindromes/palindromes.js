const palindromes = function (word) {
  // first we lowercase the word
  word = word.toLowerCase();
  // now we get an array from the match string function of all letters and numbers
  let wordLetters = word.match(/[a-z0-9]/g);

  // create the unmodified letters variable before reversing
  let originalLetters = wordLetters.join("");

  // now we make a new string from an array of the word letters reversed
  let reversedLetters = wordLetters.reverse().join("");

  // now return result of comparing the two words
  return reversedLetters === originalLetters;
};

// Do not edit below this line
module.exports = palindromes;
