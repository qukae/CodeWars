// Test.describe("Sample tests", function() {
//     Test.it("Should pass Sample tests", function() {
//       Test.assertDeepEquals(arrayDiff([], [4,5]), [], "a was [], b was [4,5]");
//       Test.assertDeepEquals(arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]");
//       Test.assertDeepEquals(arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []");
//     });
//   }); 

const a = [1];
const b = [1, 2, 1, 3, 1 ,4];


function makeDiff(val,array){
    const pos = array.indexOf(val);
    const removedItem = array.splice(pos, 1);
    return removedItem;
};

// function arrayDiff(a, b) {
//     if (a.lenght === 0 || a.lenght === 1){
//         makeDiff(a,b)
//     } else if (b.lenght == 0 || b.lenght == 1){
//         makeDiff(b,a)
//     }
//     else{
//         throw Error("single value only")
//     };

//     const result = function makeDiff(val,array){
//         const pos = array.indexOf(val);
//         const removedItem = array.splice(pos, 1);
//         return removedItem;
//     }
//     return result;
//   };

//console.log(a.length);
console.log(makeDiff([1],b));