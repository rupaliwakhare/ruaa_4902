// Convert numbers to strings

let arr = [10, 20, 30];
let strArr = [];

for (let i = 0; i < arr.length; i++) {
  strArr[i] = String(arr[i]);
}

console.log(strArr);


// dryrun
// i = 0  => arr[i] = 10 strArr[0] = "10" strArr = ["10"]

// i = 1  => arr[i] = 20 strArr[1] = "20" strArr = ["10", "20"]

// i = 2  => arr[i] = 30 strArr[2] = "30" strArr = ["10", "20", "30"]

// output
// [6, 10, 14, 18]