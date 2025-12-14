// Find first even number.

let arr = [5,9,13,8,12,7]
let Even = [];

for (let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
        Even = arr[i];
        break;
    }
}
console.log(Even);

// i = 0 arr[i] = 5 5 % 2 == 0 = false → Even = [] 
// i = 1 arr[i] = 9 9 % 2 == 0 = false → Even = []
// i = 2 arr[i] = 13 13 % 2 == 0 = false → Even = []
// i = 3 arr[i] = 8 8 % 2 == 0 = true → Even = 8 (break)

// output
8