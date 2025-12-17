// Make array of squares.

let arr = [2, 4, 6, 8];
let squares = [];

for (let i = 0; i < arr.length; i++) {
  squares[i] = arr[i] * arr[i];
}

console.log(squares);


// dryrun
// i = 0  => arr[i] = 2 squares[0] = 2 * 2 = 4 squares = [4]

// i = 1  => arr[i] = 4 squares[1] = 4 * 4 = 16 squares = [4, 16]

// i = 2  => arr[i] = 6 squares[2] = 6 * 6 = 36 squares = [4, 16, 36]

// i = 3  => arr[i] = 8 squares[3] = 8 * 8 = 64 squares = [4, 16, 36, 64]


// output
// [4, 16, 36, 64];