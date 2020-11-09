function peak(arr){
  for (let i = 0; i< arr.length; i++) {
    let arrayLeft = arr.slice(0, i)
    let arrayRight = arr.slice(i+1)
    let sumLeft = arrayLeft.reduce((total, amount) => total + amount, 0)
    let sumRight = arrayRight.reduce((total, amount) => total + amount, 0)
    if(sumLeft === sumRight) {
      return i
    }
    if (i === arr.length - 1) {
      return -1
    }
  }
 }





  console.log(peak([1,2,3,5,3,2,1]),3);
  console.log(peak([1,12,3,3,6,3,1]),2);
  console.log(peak([10,20,30,40]),-1);