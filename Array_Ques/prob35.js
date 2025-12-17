// Print all primes

let arr = [3, 4, 7, 9, 11];

for (let i = 0; i < arr.length; i++) {
  let num = arr[i];
  let isPrime = true;

  if (num < 2) isPrime = false;

  for (let j = 2; j < num; j++) {
    if (num % j === 0) {
      isPrime = false;
    }
  }

  if (isPrime) console.log(num);
}

// 3 => prime => print 3
// 4 => not prime
// 7 => prime => print 7
// 9 => not prime
// 11 => prime => print 11


// output
// 3
// 7
// 11
