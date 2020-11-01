const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
  if (!Array.isArray(arr)) throw new Error();
  let transformedArr = [...arr];

  for (let i = 0; i < transformedArr.length; i++) {

     if (transformedArr[i] === '--discard-prev') {
        if (transformedArr[i - 1] != undefined) {
           transformedArr = [...transformedArr.slice(0, i - 1), ...transformedArr.slice(i + 1)];
           i = i - 2;
        } else {
           transformedArr = [...transformedArr.slice(i + 1)];
           i = i - 1;
        }
        continue;
     }

     if (transformedArr[i] === '--discard-next') {
        if (transformedArr[i + 2] === '--discard-prev' || transformedArr[i + 2] === '--double-prev') {
           transformedArr = [...transformedArr.slice(0, i), ...transformedArr.slice(i + 3)];
           i = i - 2;
           continue;
        }
        if (transformedArr[i + 1] != undefined) {
           transformedArr = [...transformedArr.slice(0, i), ...transformedArr.slice(i + 2)];
           i = i - 1;
        } else {
           transformedArr = [...transformedArr.slice(0, transformedArr.length - 1)];
        }
        continue;
     }

     if (transformedArr[i] === '--double-prev') {
        if (transformedArr[i - 1] != undefined) {
           transformedArr = [...transformedArr.slice(0, i), transformedArr[i - 1],...transformedArr.slice(i + 1)]
        } else {
           transformedArr = [...transformedArr.slice(i + 1)]
           i = i - 1;
        }
     }

     if (transformedArr[i] === '--double-next') {
        if (transformedArr[i + 2] === '--double-prev') {
           transformedArr[i] = transformedArr[i + 1];
           transformedArr[i + 2] = transformedArr[i + 1];
           i = i + 2;
           continue;
        }
        if (transformedArr[i + 1] != undefined) {
           transformedArr = [...transformedArr.slice(0, i), transformedArr[i + 1], ...transformedArr.slice(i + 1)]
           i = i + 1;
        } else {
           transformedArr = [...transformedArr.slice(0, transformedArr.length - 1)]
        }
     }

  }

  return transformedArr;
};
