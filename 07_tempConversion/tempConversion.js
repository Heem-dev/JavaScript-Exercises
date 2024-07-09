const convertToCelsius = function (degree) {
  const convered = (degree - 32) / 1.8;
  let rounded = convered.toFixed(1);
  rounded = parseFloat(rounded);
  return rounded;
};

const convertToFahrenheit = function (degree) {
  const convered = degree * 1.8 + 32;
  let rounded = convered.toFixed(1);
  rounded = parseFloat(rounded);
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
