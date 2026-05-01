let arr = [1,2,3,4,4,5,7,7];

function removeDuplicate (arr){

return [...new Set (arr)];
}
console.log(removeDuplicate(arr));
