const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, val = 1) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        return this.calculateDepth(arr.flat(), val + 1)
      }
    }
    return val;
  }
};