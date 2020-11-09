String.prototype.toJadenCase = function () {
  const capString = [];

  for (let i = 0; i < this.length; i++) {
    if (this[i-1] === " " || i === 0) {
      capString[i] = this[i].toUpperCase()
    } else {
      capString[i] = this[i]
    }
  }
  return capString.join('');
};

console.log(String.prototype.toJadenCase("check string"))

var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());