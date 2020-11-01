const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  return members.filter(member => typeof member === 'string')
    .sort((a, b) => {
      a = a.trim().toLocaleUpperCase();
      b = b.trim().toLocaleUpperCase();
      if (a > b) return 1;
      if (a === b) return 0;
      if (a < b) return -1;
    })
    .map(member => {
      return member.trim().charAt(0).toLocaleUpperCase();
    })
    .join('');
};
