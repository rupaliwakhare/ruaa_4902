// Find the index of a given number.
const arr = [3, 4, 6, 2, 1, 0, 5];

const target = 6;

 let  a = -1;

for (let i = 0; i < arr.length; i++){
    if(arr[i] === target){
      a = i;
      break;
    }
}
console.log(a);

// dry run

// i = 0 => arr[i] = 3 => 3 === 6 => false
// i = 1 => arr[i] = 4 => 4 === 6 => false
// i = 2 => arr[i] = 6 => 6 === 6 => true 


// output 
// 2
  
