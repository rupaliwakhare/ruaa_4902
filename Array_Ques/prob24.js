// Count numbers between 10 and 50.

let arr = [5, 12, 25, 7, 50, 33, 9, 48];
let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= 10 && arr[i] <= 50) {
    count++;
  }
}

console.log(count);


// dryrun
// i = 0  => arr[i] = 5      5  >=10 && <=50 => FALSE   => count = 0
// i = 1  => arr[i] = 12     12 >=10 && <=50 => TRUE    => count = 1
// i = 2  => arr[i] = 25     25 >=10 && <=50 => TRUE    => count = 2
// i = 3  => arr[i] = 7      7  >=10 && <=50 => FALSE   => count = 2
// i = 4  => arr[i] = 50     50 >=10 && <=50 => TRUE    => count = 3
// i = 5  => arr[i] = 33     33 >=10 && <=50 => TRUE    => count = 4
// i = 6  => arr[i] = 9      9  >=10 && <=50 => FALSE   => count = 4
// i = 7  => arr[i] = 48     48 >=10 && <=50 => TRUE    => count = 5
