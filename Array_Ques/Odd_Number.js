// Count how many odd numbers are in the array.

const arr = [3, 4, 6, 2, 1, 0, 5];
let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    count++;
  }
}

console.log(count);

// dryrun
// i = 0 arr[i] = 0 3%2 = 1 (true) = 1
// i = 1 arr[i] = 4 4%2 = 0 (false) = 1
// i = 2 arr[i] = 6 6%2 = 0 (false) = 1
// i = 3 arr[i] = 2 2%2 = 0 (false) = 1
// i = 4 arr[i] = 1 1%2 = 1 (true) = 2
// i = 5 arr[i] = 0 0%2 = 0 (false) = 2
// i = 6 arr[i] = 5 5%2 = 1 (true) = 3

// output
// 3

