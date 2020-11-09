// 1|   |6
// 3|   |4
// 5|   |2
// 7
// // // Evens increase on the right; odds decrease on the left. 
// House numbers start at 1 and
// //  increase without gaps. When n = 3, 1 
// is opposite 6, 3 opposite 4, and 5 opposite 2.


/*
1. take n and split it into two arrays odds(revers) evens
2. take address and check if it is odd
3. if 3 true mach address with even
4. else match with odd 
checks
1.  address and n number
2.  address<n
3.  odds !== evens and address = odds or evens last item  

*/

function overTheRoad(address, n){
    const odds = [];
    const evens = [];
    let result;
    for(let i =1;i<=n*2;i++){
      if(i%2 == 0){
        evens.push(i);
      }
      else{
        odds.push(i);
      }
    }
    odds.reverse();

    if(address%2 == 0){
      result = odds[evens.indexOf(address)];
    }
    else{
      result = evens[odds.indexOf(address)];
    }
    return result;
  }
  
  console.log(overTheRoad(3,6));

  /*
  function overTheRoad(address, n){
  return (n*2+1)-address;
}
*/

