function sum(a) {
    let sum = a;
    let inner = function (b) {
      if (b) {
        sum += b;
        return inner;
      } else {
        return sum;
      }
    };
    return inner;
}


console.log(sum(1)()); // 1
console.log(sum(1)(2)()); // 3
console.log(sum(1)(2)(3)(10)()); // 16