let arr = [10, 20, 4, 45, 99];

function secondLargest(arr) {
  let unique = [...new Set(arr)]; 
  unique.sort((a, b) => b - a); 
  return unique[1]; 
}
console.log(secondLargest(arr)); 
