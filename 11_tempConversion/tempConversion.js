const convertToCelsius = function(tempFarenheit) {
  let celsius = (tempFarenheit - 32) * 5/9;
  let roundedResult = Math.round(celsius * 10)/10;
  return roundedResult;
};

const convertToFahrenheit = function(tempCelsius) {
  let farenheit = tempCelsius * 9/5 + 32;
  let roundedResult =  Math.round(farenheit * 10)/10;
  return roundedResult;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
