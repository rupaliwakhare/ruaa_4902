// Check if array is sorted

let arr = [1, 2, 3, 4, 5];
let sorted = true;

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] > arr[i + 1]) {
    sorted = false;
  }
}

console.log(sorted);


// i = 0 => 1 > 2 => FALSE
// i = 1 => 2 > 3 => FALSE
// i = 2 => 3 > 4 => FALSE
// i = 3 => 4 > 5 => FALSE

// sorted = true
