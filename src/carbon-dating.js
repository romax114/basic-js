const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  if (typeof sampleActivity !== 'string') return false;

  let activity = parseFloat(sampleActivity);
  if (isNaN(activity) || activity <= 0 || activity > MODERN_ACTIVITY) return false;

  const k = 0.693 / HALF_LIFE_PERIOD;
  let t = Math.ceil(Math.log(MODERN_ACTIVITY / activity) / k);
  return t;
};
