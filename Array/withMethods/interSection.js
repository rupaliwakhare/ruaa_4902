let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];

function interSection ([arr1,arr2]){
return arr1.filter(val=>arr2.includes(val));
}

console.log(interSection([arr1,arr2]));
