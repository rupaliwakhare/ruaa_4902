// Count frequency of a given number.

let arr = [3, 5, 7, 5, 2, 5, 9];
let num = 5;
let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === num) {
    count++;
  }
}

console.log(count);


// dryrun
// i = 0  =>  arr[i] = 3   3 === 5  =>  FALSE  => count = 0
// i = 2  =>  arr[i] = 7   7 === 5  =>  FALSE  => count = 1
// i = 1  =>  arr[i] = 5   5 === 5  =>  TRUE   => count = 1
// i = 3  =>  arr[i] = 5   5 === 5  =>  TRUE   => count = 2
// i = 4  =>  arr[i] = 2   2 === 5  =>  FALSE  => count = 2
// i = 5  =>  arr[i] = 5   5 === 5  =>  TRUE   => count = 3
// i = 6  =>  arr[i] = 9   9 === 5  =>  FALSE  => count = 3