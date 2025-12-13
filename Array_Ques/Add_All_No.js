// Add all numbers in an array (without reduce)
const arr = [1, 2, 3, 4, 5]
 let sum = 0;

function Sum(){
    // let sum = 0;
    for(i=0; i<arr.length; i++){
        sum += arr[i]
    }
    return sum;
}
console.log(Sum());


// i = 0  arr[i] = 1 sum = 0+1 = 1
// i = 1  arr[i] = 2 sum = 1+2 = 3

