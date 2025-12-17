// Combine two arrays alternatively

let a = [1, 3, 5];
let b = [2, 4, 6];
let result = [];

for (let i = 0; i < a.length; i++) {
  result.push(a[i]);
  result.push(b[i]);
}

console.log(result);


// i = 0  
// result.push(a[0]) => push 1  
// result.push(b[0]) => push 2  
// result = [1, 2]

// i = 1  
// result.push(a[1]) => push 3  
// result.push(b[1]) => push 4  
// result = [1, 2, 3, 4]

// i = 2  
// result.push(a[2]) => push 5  
// result.push(b[2]) => push 6  
// result = [1, 2, 3, 4, 5, 6]
