/*
1. create array from num
2. square each array item
3. join and return result 

*/
const num = 45665;

function squareDigits(num){
    let arr = Array.from(String(num), Number); //create array
    arr = arr.map(x => x ** 2);                // square all items
    return Number(arr.join(""));               // join back to integer
}
  console.log(squareDigits(num));


  /*

function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));

  */