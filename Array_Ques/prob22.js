// Merge two arrays using loop.

let arr1 =[1,2,3];
let arr2 =[4,5,6];


 function mergeArrays(arr1,arr2){
    let merged = [];

    for(let i = 0; i<arr1.length; i++){
        merged.push(arr1[i]);
    }

    for(let i = 0; i<arr2.length; i++){
        merged.push(arr2[i])
    }
    return merged;
 }
 
 let result = mergeArrays(arr1,arr2)
 console.log(result);
 
//  dryrun

// i = 0  =>  arr1[i] = 1     merged = [1]
// i = 1  =>  arr1[i] = 2     merged = [1,2]
// i = 2  =>  arr1[i] = 3     merged = [1,2,3]

// i = 0  =>  arr2[i] = 4     merged = [1,2,3,4]
// i = 1  =>  arr2[i] = 5     merged = [1,2,3,4,5]
// i = 2  =>  arr2[i] = 6     merged = [1,2,3,4,5,6]
