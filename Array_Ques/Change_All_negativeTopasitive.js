// Change all negative numbers to positive.

let arr = [2, -5, 7, -8, 4, -3];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    arr[i] = arr[i] * -1;
  }
}

console.log(arr);

// i = 0   arr[i] = 2     2 < 0 = false     → stays 2

// i = 1   arr[i] = -5   -5 < 0 = true      → -5 * -1 = 5

// i = 2   arr[i] = 7     7 < 0 = false     → stays 7

// i = 3   arr[i] = -8   -8 < 0 = true      → -8 * -1 = 8

// i = 4   arr[i] = 4     4 < 0 = false     → stays 4

// i = 5   arr[i] = -3   -3 < 0 = true      → -3 * -1 = 3


// output
// [2, 5, 7, 8, 4, 3]