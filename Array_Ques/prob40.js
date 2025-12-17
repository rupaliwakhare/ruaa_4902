// Convert strings to uppercase

let arr = ["cat", "dog", "lion"];
let result = [];

for (let i = 0; i < arr.length; i++) {
  let str = arr[i];
  let upper = "";

  for (let j = 0; j < str.length; j++) {
    let ch = str[j];

    // convert manually
    if (ch >= "a" && ch <= "z") {
      upper += String.fromCharCode(ch.charCodeAt(0) - 32);
    }
  }

  result.push(upper);
}

console.log(result);


