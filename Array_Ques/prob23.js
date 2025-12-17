// Move all zeros to the end.

let arr = [0, 3, 0, 5, 0, 9, 2];
let newArr = [];
let j = 0;

// copy non‑zero elements
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 0) {
    newArr[j] = arr[i];
    j++;
  }
}



// fill remaining with zeros
for (let i = j; i < arr.length; i++) {
  newArr[i] = 0;
}

console.log(newArr);


// dryrun
// i = 0  => arr[i] = 0     0 !== 0 => FALSE     => j = 0     newArr = []

// i = 1  => arr[i] = 3     3 !== 0 => TRUE      => newArr[0] = 3   j=1
// newArr = [3]

// i = 2  => arr[i] = 0     0 !== 0 => FALSE     => j = 1

// i = 3  => arr[i] = 5     5 !== 0 => TRUE      => newArr[1] = 5   j=2
// newArr = [3,5]

// i = 4  => arr[i] = 0     0 !== 0 => FALSE     => j = 2

// i = 5  => arr[i] = 9     9 !== 0 => TRUE      => newArr[2] = 9   j=3
// newArr = [3,5,9]

// i = 6  => arr[i] = 2     2 !== 0 => TRUE      => newArr[3] = 2   j=4
// newArr = [3,5,9,2]



// i = 4  => newArr[4] = 0     newArr = [3,5,9,2,0]

// i = 5  => newArr[5] = 0     newArr = [3,5,9,2,0,0]

// i = 6  => newArr[6] = 0     newArr = [3,5,9,2,0,0,0]
