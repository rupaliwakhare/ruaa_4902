// Count how many numbers are greater than 10.

let arr = [4, 12, 7, 25, 18, 3, 11];

let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 10) {
    count++;
  }
}
console.log(count);

// i = 0 arr[i] = 4 4 > 10 = false → count = 0 
// i = 1 arr[i] = 12 12 > 10 = true → count = 1 
// i = 2 arr[i] = 7 7 > 10 = false → count = 1 
// i = 3 arr[i] = 25 25 > 10 = true → count = 2 
// i = 4 arr[i] = 18 18 > 10 = true → count = 3 
// i = 5 arr[i] = 3 3 > 10 = false → count = 3 
// i = 6 arr[i] = 11 11 > 10 = true → count = 4

// output
// 4
