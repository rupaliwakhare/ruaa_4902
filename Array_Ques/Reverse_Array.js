// Reverse an array without using reverse().

let arr = [2,3,6,5,9,8]


function reverseArray (){
    
    let rev = [];
    for(let i=0; i<arr.length; i++){
        rev[i]= arr[arr.length-1 -i];
    }
    return rev;
}

console.log(reverseArray(arr));
//  dryrun
// i = 0   arr[6-1-0] = arr[5] = 8   → rev[0] = 8
// i = 1   arr[6-1-1] = arr[4] = 9   → rev[1] = 9
// i = 2   arr[6-1-2] = arr[3] = 5   → rev[2] = 5
// i = 3   arr[6-1-3] = arr[2] = 6   → rev[3] = 6
// i = 4   arr[6-1-4] = arr[1] = 3   → rev[4] = 3
// i = 5   arr[6-1-5] = arr[0] = 2   → rev[5] = 2
