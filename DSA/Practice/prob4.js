//  reverse 

// let arr = [2,3,5,6,3];

// function reverseArr (arr){
//     let reverse = []

//     for(let i=arr.length-1; i>=0; i--){
//         reverse.push(arr[i])
//     }
//     return reverse
// }

// console.log(reverseArr(arr));


let rev = [1,3,5,7]

function reverseArr(rev){
    let reverse = [];

    for(let i = rev.length-1; i>=0; i--){
        reverse.push(rev[i])
    }
    return reverse
}
console.log(reverseArr(rev));
