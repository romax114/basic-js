const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(method = true) {
    this.method = method;
  }

  encrypt(message, keyword) {

    if (typeof message === 'undefined' || typeof keyword === 'undefined') throw new Error();

    let encodeMessage = '';
    message = message.toUpperCase();
    keyword = keyword.toUpperCase();
    let j;

    for (let i = 0; i < message.length; i++) {

      (j === keyword.length - 1 || i === 0) ? j = 0 : j++;

      let codeOfOpenMessage = this.getNumberFromLetter(message[i]);
      let codeOfKeyWord = this.getNumberFromLetter(keyword[j]);

      if (codeOfOpenMessage < 0 || codeOfOpenMessage > 25) {
        encodeMessage += message[i];
        j--;
        continue;
      }

      let y = (codeOfOpenMessage + codeOfKeyWord) % 26;
      encodeMessage += this.getLetterFromNumber(y);
    }

    return this.method ? encodeMessage : this.reverseString(encodeMessage);
  }

  decrypt(message, keyword) {

    if (typeof message === 'undefined' || typeof keyword === 'undefined') throw new Error();

    let decodeMessage = '';
    message = message.toUpperCase();
    keyword = keyword.toUpperCase();
    let j;

    for (let i = 0; i < message.length; i++) {

      (j === keyword.length - 1 || i === 0) ? j = 0 : j++;

      let codeOfOpenMessage = this.getNumberFromLetter(message[i]);
      let codeOfKeyWord = this.getNumberFromLetter(keyword[j]);

      if (codeOfOpenMessage < 0 || codeOfOpenMessage > 25) {
        decodeMessage += message[i];
        j--;
        continue;
      }

      let x = (codeOfOpenMessage - codeOfKeyWord + 26) % 26;
      decodeMessage += this.getLetterFromNumber(x);
    }

    return this.method ? decodeMessage : this.reverseString(decodeMessage);
  }

  getNumberFromLetter(char) {
    return char.codePointAt(0) + 26 - 91;
  }

  getLetterFromNumber(number) {
    return String.fromCodePoint(number + 91 - 26);
  }

  reverseString(str) {
    return [...str].reverse().join('');
  }

}

module.exports = VigenereCipheringMachine;
