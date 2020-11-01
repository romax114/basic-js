const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  // throw new CustomError('Not implemented');
  if (date == undefined) return 'Unable to determine the time of year!';
  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length !== 0) throw new Error();
  let pathOfYear = (date.getMonth() + 1) / 3;
  if (pathOfYear < 1 || pathOfYear === 4) return 'winter';
  if (pathOfYear < 2 || pathOfYear === 1) return 'spring';
  if (pathOfYear < 3 || pathOfYear === 2) return 'summer';
  if (pathOfYear < 4 || pathOfYear === 3) return 'autumn';
};
