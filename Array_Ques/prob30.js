// Sum only even numbers

let arr = [5, 12, 7, 20, 33, 8];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    sum = sum + arr[i];
  }
}

console.log(sum);


// i = 0  => arr[i] = 5  5 % 2 === 0 => FALSE sum = 0
// i = 1  => arr[i] = 12 12 % 2 === 0 => TRUE sum = 0 + 12 = 12
// i = 2  => arr[i] = 7 7 % 2 === 0 => FALSE sum = 12
// i = 3  => arr[i] = 20 20 % 2 === 0 => TRUE sum = 12 + 20 = 32
// i = 4  => arr[i] = 33 33 % 2 === 0 => FALSE sum = 32
// i = 5  => arr[i] = 8 8 % 2 === 0 => TRUE sum = 32 + 8 = 40
