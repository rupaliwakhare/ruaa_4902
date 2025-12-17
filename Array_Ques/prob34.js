// Count prime numbers

let arr = [3, 4, 7, 9, 11];
let count = 0;

for (let i = 0; i < arr.length; i++) {
  let num = arr[i];
  let isPrime = true;

  if (num < 2) isPrime = false;

  for (let j = 2; j < num; j++) {
    if (num % j === 0) {
      isPrime = false;
    }
  }

  if (isPrime) count++;
}

console.log(count);


// 3 => prime => count = 1
// 4 => not prime => count = 1
// 7 => prime => count = 2
// 9 => not prime => count = 2
// 11 => prime => count = 3
