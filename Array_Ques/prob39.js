// Remove negative numbers


let arr = [5, -3, 12, -7, 9];
let result = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= 0) {
    result.push(arr[i]);
  }
}

console.log(result);

// i = 0  => arr[i] = 5
// 5 >= 0 => TRUE
// result.push(5)
// result = [5]

// i = 1  => arr[i] = -3
// -3 >= 0 => FALSE
// result = [5]

// i = 2  => arr[i] = 12
// 12 >= 0 => TRUE
// result.push(12)
// result = [5, 12]

// i = 3  => arr[i] = -7
// -7 >= 0 => FALSE
// result = [5, 12]

// i = 4  => arr[i] = 9
// 9 >= 0 => TRUE
// result.push(9)
// result = [5, 12, 9]
