// Rotate array right by 1

let arr = [1, 2, 3, 4, 5];
let last = arr[arr.length - 1];

for (let i = arr.length - 1; i > 0; i--) {
  arr[i] = arr[i - 1];
}

arr[0] = last;

console.log(arr);


// i = 4 => arr[4] = arr[3] => 4
// i = 3 => arr[3] = arr[2] => 3
// i = 2 => arr[2] = arr[1] => 2
// i = 1 => arr[1] = arr[0] => 1
// arr[0] = last => 5
