// Find last even number.

let arr = [5, 9, 13, 8, 12, 7];
let lastEven = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    lastEven = arr[i];

  }
}
console.log(lastEven);

// dryrun

// i = 0 arr[i] = 5 5 % 2 = false → lastEven = [] 
// i = 1 arr[i] = 9 9 % 2 = false → lastEven = [] 
// i = 2 arr[i] = 13 13 % 2 = false → lastEven = [] 
// i = 3 arr[i] = 8 8 % 2 = true → lastEven = 8
// i = 4 arr[i] = 12 12 % 2 = true → lastEven = 12
// i = 5 arr[i] = 7 7 % 2 = false → lastEven = 12

// output
// 12