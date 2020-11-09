function solve(arr) {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    const subArr = arr[i];
    for (let j = 0; j < subArr.length; j++) {
      const el = subArr[j];
      console.log(el);
    }
  }
  return 0;
};
// const arr = [[1,2],[4],[5,6]];
// console.log(...arr);

console.log(solve([[1,2],[4],[5,6]]),4);

