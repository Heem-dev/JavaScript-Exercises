const getTheTitles = function (books) {
  let titlesArray = books.map((book) => {
    return book.title;
  });

  return titlesArray;
};

// Do not edit below this line
module.exports = getTheTitles;
