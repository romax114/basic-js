const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  return arr.flat()
    .filter(item => item === '^^').length
};
