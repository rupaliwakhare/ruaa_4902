//  Copy an array manually.

let arr = [2,6,9,4]
let copy = [];

for (let i = 0; i < arr.length; i++) {
  copy[i] = arr[i];
}
 console.log(copy);

//  dryrun
// i = 0   arr[0] = 2   → copy[0] = 2
// i = 1   arr[1] = 6   → copy[1] = 6
// i = 2   arr[2] = 9   → copy[2] = 9
// i = 3   arr[3] = 4   → copy[3] = 4


//  output

// [2, 6, 9, 4];
 
