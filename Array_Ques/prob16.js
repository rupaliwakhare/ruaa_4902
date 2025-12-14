// Return only positive numbers.

let arr = [3,-5,7,-2,0,9,-8];
let a = [];
let b = 0;



for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
        a[b] = arr[i];
        b++;
    }
}
console.log(a);

// i = 0 → arr[i] = 3 3 > 0 = true → a[0] = 3 → b = 1

// i = 1 → arr[i] = -5 -5 > 0 = false → skip → a = [3]

// i = 2 → arr[i] = 7 7 > 0 = true → a[1] = 7 → b = 2

// i = 3 → arr[i] = -2 -2 > 0 = false → skip → a = [3, 7]

// i = 4 → arr[i] = 0 0 > 0 = false → skip → a = [3, 7]

// i = 5 → arr[i] = 9 9 > 0 = true → a[2] = 9 → b = 3

// i = 6 → arr[i] = -8 -8 > 0 = false → skip → a = [3, 7, 9]

// output
// [3, 7, 9]