const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (isNaN(+position) ||
        !Number.isInteger(position) ||
        position >= this.chain.length
    ) {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let chained = this.chain.map((value, i) => i === 0 ? `( ${value} )` : `~~( ${value} )`).join('');
    this.chain = [];
    return chained;
  }
};

module.exports = chainMaker;
