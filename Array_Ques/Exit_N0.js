const arr = [2,3,5,7,3,7,9]
target = 5;

let exists = false;

for (let i = 0; i < arr.length; i++){
    if(arr[i] === target){
        exists = true;
        break;
    }
}
console.log(exists);

 // i = 0  arr[i] = 3   3 === 6 → false
// i = 1  arr[i] = 4   4 === 6 → false
// i = 2  arr[i] = 6   6 === 6 → true → exists = true → break
