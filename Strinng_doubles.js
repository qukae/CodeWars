function doubles(s){
  const arr = s.split('')
console.log(  arr.reduce((acc, el, index, self) => {
  console.log(el, '|', self[index+1]);
  if(el !== self[index+1]) {
    acc += el
  }
  return acc
}, ''));

}



  console.log(doubles('abbbzz'),'ab')
  // console.log(doubles('zzzzykkkd'),'ykd')
  // console.log(doubles('abbcccdddda'),'aca')
  // console.log(doubles('vvvvvoiiiiin'),'voin')
  // console.log(doubles('rrrmooomqqqqj'),'rmomj')
  // console.log(doubles('xxbnnnnnyaaaaam'),'bnyam')
