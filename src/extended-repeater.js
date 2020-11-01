const CustomError = require("../extensions/custom-error");

module.exports = function repeater(
  str,
  {
    repeatTimes = 1,
    separator = '+',
    addition,
    additionRepeatTimes = 1,
    additionSeparator = '|'
  }
) {

  let extendedStr = '';

  if (typeof addition !== 'undefined') addition = String(addition);
  str = String(str);

  for (let i = 0; i < repeatTimes; i++) {

    extendedStr += str;

    if (typeof addition !== 'undefined') {
      for (let j = 0; j < additionRepeatTimes; j++) {
        extendedStr += addition;
        if (j !== additionRepeatTimes - 1) extendedStr += additionSeparator;
      }
    }

    if (i !== repeatTimes - 1) extendedStr += separator;
  }

  return extendedStr;
};
