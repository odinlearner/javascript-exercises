const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(nums) {
	return nums.reduce((p,c) => p+c, 0);
};

const multiply = function(nums) {
  return nums.reduce((p,c) => p*c, 1);
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(n) {
  let res = 1;
  for(let i = n; i>0; i--) {
    res *= i;
  }
  return res;
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
