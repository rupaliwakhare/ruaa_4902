// Find number of elements without using length directly.

let arr = [2,5,7,8,4]
let count = 0;

for(let i = 0; arr[i] !== undefined; i++){
     count++;
    
}
console.log(count);

// dryrun
// i = 0   arr[0] = 2   → not undefined   → count = 1
// i = 1   arr[1] = 5   → not undefined   → count = 2
// i = 2   arr[2] = 7   → not undefined   → count = 3
// i = 3   arr[3] = 8   → not undefined   → count = 4
// i = 4   arr[4] = 4   → not undefined   → count = 5
// i = 5   arr[5] = undefined   → loop stop

// output
// 5