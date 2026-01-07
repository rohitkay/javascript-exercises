const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
	let addedSum = 0
  for(let item of arr){
    addedSum += item;
  }
  return addedSum;
};

const multiply = function(arr) {
  let multiplied = 1
  for (let item of arr){
    multiplied = multiplied * item;
  }
  return multiplied;
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(a) {
  let factorialValue = 1
  if(a == 0){
    factorialValue = 1;
  }
  for(let i = a; i>0;i--){
    factorialValue = factorialValue * i;
  }
  return factorialValue;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
