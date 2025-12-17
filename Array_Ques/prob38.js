// Remove vowels from array of characters

let arr = ["a", "b", "e", "x", "i", "o"];
let result = [];

for (let i = 0; i < arr.length; i++) {
  let ch = arr[i];
  if (ch !== "a" && ch !== "e" && ch !== "i" && ch !== "o" && ch !== "u") {
    result.push(ch);
  }
}

console.log(result);


// i = 0  => ch = 'a'
// 'a' is a vowel => condition FALSE
// result = []

// i = 1  => ch = 'b'
// 'b' is NOT a vowel => condition TRUE
// result.push('b')
// result = ['b']

// i = 2  => ch = 'e'
// 'e' is a vowel => condition FALSE
// result = ['b']

// i = 3  => ch = 'x'
// 'x' is NOT a vowel => condition TRUE
// result.push('x')
// result = ['b', 'x']

// i = 4  => ch = 'i'
// 'i' is a vowel => condition FALSE
// result = ['b', 'x']

// i = 5  => ch = 'o'
// 'o' is a vowel => condition FALSE
// result = ['b', 'x']
