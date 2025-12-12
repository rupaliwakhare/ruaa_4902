// Count how many even numbers are in the array.

const arr = [3,4,6,2,1,0,5];
let count = 0;

for (let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
        count++;
    
    }
    
}

console.log(count);


// i = 0 arr[i] = 3 3%2 = false  = 0
// i = 1 arr[i] = 4 4%2 = true = 1
// i = 2 arr[i] = 6 6%2 = true = 2
// i = 3 arr[i] = 2 2%2 = true = 3
// i = 4 arr[i] = 1 1%2 = false = 3
// i = 5 arr[i] = 0 0%2 = true = 4
// i = 6 arr[i] = 5 5%2 = false = 4

// output = 4