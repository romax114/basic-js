const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  // throw new CustomError('Not implemented');
  let turns = 2**disksNumber - 1;
  let seconds = Math.floor(3600 * turns / turnsSpeed);
  return {
    turns,
    seconds
  }
};
