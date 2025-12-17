// Find the longest string

let arr = ["cat", "elephant", "dog", "tiger"];
let longest = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i].length > longest.length) {
    longest = arr[i];
  }
}

console.log(longest);

// i = 0  => arr[i] = "cat"  "cat".length = 3 > "cat".length = 3 => FALSE  longest = "cat"

// i = 1  => arr[i] = "elephant" "elephant".length = 8 > "cat".length = 3 => TRUE longest = "elephant"

// i = 2  => arr[i] = "dog"  "dog".length = 3 > "elephant".length = 8 => FALSE  longest = "elephant"

// i = 3  => arr[i] = "tiger"  "tiger".length = 5 > "elephant".length = 8 => FALSE  longest = "elephant"


// output
// elephant