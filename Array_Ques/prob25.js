// Print only unique elements.

let arr = [1, 2, 2, 3, 4, 4, 5];

for (let i = 0; i < arr.length; i++) {
  let count = 0;

  for (let j = 0; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      count++;
    }
  }

  if (count === 1) {
    console.log(arr[i]);
  }
}

// i = 0  => arr[i] = 1 count = 1 count === 1 => TRUE  => print 1
// i = 1  => arr[i] = 2 count = 2 count === 1 => FALSE
// i = 2  => arr[i] = 2 count = 2 count === 1 => FALSE
// i = 3  => arr[i] = 3 count = 1 count === 1 => TRUE  => print 3
// i = 4  => arr[i] = 4 count = 2 count === 1 => FALSE
// i = 5  => arr[i] = 4 count = 2 count === 1 => FALSE
// i = 6  => arr[i] = 5 count = 1 count === 1 => TRUE  => print 5

// output 
// 1
// 3
// 5
