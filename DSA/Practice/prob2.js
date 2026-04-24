// reverse an array



// let arr = [1, 2, 3, 4, 5];

// function reverse(arr) {
//   let reverseArr = [];
//   // loop ko last index se start karo
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reverseArr.push(arr[i]);
//   }
//   return reverseArr;
// }

// console.log(reverse(arr));


let rev = [23,45,12,65,88];

function revAr(rev){
    let revARR = [];
    for(let i = rev.length - 1; i>=0; i--){
        revARR.push(rev[i])
    }
    return revARR;
}
console.log(revAr(rev));
