
// 27. Make array of doubles.

let arr = [3, 5, 7, 9];
let doubles = [];

for (let i = 0; i < arr.length; i++) {
  doubles[i] = arr[i] * 2;
}

console.log(doubles);

// dryrun
// i = 0  => arr[i] = 3 doubles[0] = 3 * 2 = 6  doubles = [6]

// i = 1  => arr[i] = 5 doubles[1] = 5 * 2 = 10 doubles = [6, 10]

// i = 2  => arr[i] = 7 doubles[2] = 7 * 2 = 14 doubles = [6, 10, 14]

// i = 3  => arr[i] = 9 doubles[3] = 9 * 2 = 18 doubles = [6, 10, 14, 18]
