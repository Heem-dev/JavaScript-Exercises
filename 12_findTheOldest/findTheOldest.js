const findTheOldest = function (people) {
  // add age property to each person even if there is no death year
  people.forEach((person) => {
    if (!person.yearOfDeath) {
      person.age = new Date().getFullYear() - person.yearOfBirth;
    } else {
      person.age = person.yearOfDeath - person.yearOfBirth;
    }
  });
  // make an array of people sorted from oldest to youngest
  let sortedPeople = people.toSorted(
    (person1, nextPerson) => nextPerson.age - person1.age
  );
  return sortedPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;
