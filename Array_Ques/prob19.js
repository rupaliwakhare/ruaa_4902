// Find second largest number.

let arr = [3, 9, 2, 11, 7, 10];

let largest = [0];
let second = [0];


for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
}

// i = 1  =>  arr[i]  =  9   =>  9   =>  3   =>  TRUE   =>  largest  =  9 
// i = 2  =>  arr[i]  =  2   =>  2   =>  9   =>  FALSE  =>  largest  =  9 
// i = 0  =>  arr[i]  =  3   =>  3   =>  0   =>  TRUE   =>  largest  =  3 
// i = 3  =>  arr[i]  =  11  =>  11  =>  9   =>  TRUE   =>  largest  =  11
// i = 4  =>  arr[i]  =  7   =>  7   =>  11  =>  FALSE  =>  largest  =  11 
// i = 5  =>  arr[i]  =  10  =>  10  =>  1   =>  FALSE  =>  largest  =  11

// Largest = 11

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > second && arr[i] < largest) {
    second = arr[i];
  }
}

console.log(second);
 
// dryrun
// i = 0  =>  arr[i] = 3     3  > second   =>  TRUE 3    <    largest   =>    TRUE  =>  second   =   3
// i = 1  =>  arr[i] = 9     9  > second   =>  TRUE 9    <    largest   =>    TRUE  =>  second   =   9
// i = 2  =>  arr[i] = 2     2  > second   =>  FALSE     =>   second    =     9
// i = 3  =>  arr[i] = 11    11 < largest  =>  FALSE     =>   second    =     9
// i = 4  =>  arr[i] = 7     7  > second   =>  FALSE     =>   second    =     9
// i = 5  =>  arr[i] = 10    10 > second   =>  TRUE 10   <    largest   =>    TRUE  =>  second   =   10


// output
// 10