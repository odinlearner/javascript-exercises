const ftoc = function(f_temp) {
  const c_temp = (f_temp - 32) * (5/9)
  return Math.round(c_temp * 10) / 10;
};

const ctof = function(c_temp) {
  const f_temp = (c_temp * (9/5)) + 32;
  return Math.round(f_temp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
