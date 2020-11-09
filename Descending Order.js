// Test.assertEquals(descendingOrder(0), 0)
// Test.assertEquals(descendingOrder(1), 1)
// Test.assertEquals(descendingOrder(123456789), 987654321)


const n = 123456789;


function descendingOrder(n){
    const array = Array.from(String(n), Number);
    array.sort(function(a, b) {
    return b - a;
    });
    return Number(array.join(""));
}

console.log(descendingOrder(n));

/*

function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))}


*/