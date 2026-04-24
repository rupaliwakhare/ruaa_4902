// Q: Find the largest number in this array:

// let arr = [45, 99, 102, 87, 1001, 76];

// function largestNum(arr) {

//   let largest = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (largest <arr[i]) {
//       largest = arr[i];
//     }
//   }
//   return largest;
// }
// console.log(largestNum(arr));


let arr = [123,458,2646,5957,2789347,893488,747949384];

// function HighestNum (arr){
//     largets = arr[0]
//     for(let i = 0; i<arr.length; i++){
//         if(largets<arr[i]){
//             largets=arr[i]
//         }
//     }
//     return largets
// }
// console.log(HighestNum(arr));

function largeNum (arr){
    large=arr[0]
for (let i = 0; i<arr.length; i++){
    if(large<arr[i]){
        large = arr[i]
    }
    
}return large;
}
console.log(largeNum(arr));
