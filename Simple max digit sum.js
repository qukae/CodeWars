// In this Kata, you will be given an integer n and your task will be to return the largest integer that is <= n and has the highest digit sum.

// For example:

// solve(100) = 99. Digit Sum for 99 = 9 + 9 = 18. No other number <= 100 has a higher digit sum.
// solve(10) = 9
// solve(48) = 48. Note that 39 is also an option, but 48 is larger.

/*
1. make 1 - n array
2. create array of sum all 1-n integers digits
3. find max [i] of sum array
4. return 1-n array[i]



*/

var number = 12354987,
  output = [];

while (number) {
  output.unshift(number % 10);
  number = Math.floor(number / 10);
}
console.log(output);

console.log(output.reduce((a, b) => a + b, 0));

function arrayMax(arr) {
  var len = arr.length,
    max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return len;
}

function solve(n) {
  const array = [];
  const summedIntegers = [];
  const output = [];
  for (let i = 0; i <= n; i++) {
    array.push(i);
  }

  console.log(array);
  
  array.forEach(i => {
      
    while (array[i]) {
        console.log("array[i]=" + array[i]);
        output.unshift(array[i] % 10);
        array[i] = Math.floor(array[i] / 10);
        console.log("output[i]=" +output[i]);
        console.log("floor[i] =" + array[i]);
      }
          
      console.log(output.reduce((a, b) => a + b, 0));
  });

 
  console.log(array);

  console.log(summedIntegers);
}
solve(20);
