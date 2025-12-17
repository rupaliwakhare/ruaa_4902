// Rotate array left by 1

let arr = [1, 2, 3, 4, 5];
let first = arr[0];

for (let i = 0; i < arr.length - 1; i++) {
  arr[i] = arr[i + 1];
}

arr[arr.length - 1] = first;

console.log(arr);


// i = 0 => arr[0] = arr[1] => 2
// i = 1 => arr[1] = arr[2] => 3
// i = 2 => arr[2] = arr[3] => 4
// i = 3 => arr[3] = arr[4] => 5
// arr[4] = first => 1
