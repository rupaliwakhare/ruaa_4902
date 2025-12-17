// Replace all values > 50 with 50

let arr = [12, 67, 45, 99, 23];
let result = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 50) {
    result[i] = 50;
  } else {
    result[i] = arr[i];
  }
}

console.log(result);


// i = 0  => arr[i] = 12 12 > 50 => FALSE result[0] = 12 result = [12]

//  i = 1  => arr[i] = 67 67 > 50 => TRUE result[1] = 50  result = [12, 50]

// i = 2  => arr[i] = 45 45 > 50 => FALSE result[2] = 45 result = [12, 50, 45]

// i = 3  => arr[i] = 99 99 > 50 => TRUE result[3] = 50 result = [12, 50, 45, 50]

// i = 4  => arr[i] = 23 23 > 50 => FALSE result[4] = 23 result = [12, 50, 45, 50, 23]
