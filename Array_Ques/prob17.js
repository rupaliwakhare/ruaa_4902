// Return numbers divisible by 5.

let arr = [3, -5, 7, -2, 0, 9, -8, 10, 25];
let result = [];
let b = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 5 === 0) {
    result[b] = arr[i];
    b++;
  }
}

console.log(result);

// i = 0  => arr[i] = 3   => 3 % 5   = 3  => FALSE  =>  result = []
// i = 1  => arr[i] = -5  => -5 % 5  = 0  => TRUE   =>  result = -5
// i = 2  => arr[i] = 7   => 7 % 5   = 2  => FALSE  =>  result = -5
// i = 3  => arr[i] = -2  => -2 % 5  = -2 => FALSE  =>  result = -5
// i = 4  => arr[i] = 0   => 0 % 5   = 0  => TRUE   =>  result = 0
// i = 5  => arr[i] = 9   => 9 % 5   = 4  => FALSE  =>  result = 0
// i = 6  => arr[i] = -8  => -8 % 5  = -3 => FALSE  =>  result = 0
// i = 7  => arr[i] = 10  => 10 % 5  = 0  => TRUE   =>  result = 10
// i = 8  => arr[i] = 25  => 25 % 5  = 0  => TRUE   =>    result = 25


// output
// [-5, 0, 10, 25]