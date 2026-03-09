// let height = [1, 8, 6, 2, 5, 4, 8, 3, 7]

// const maxArea = (height)=>{
// let max = 0;
// let n = height.length

// for(let i = 0; i<n; i++){
//     for(let j=i +1;j<n;j++){
//         let width = j-i;
//         let h = Math.min(height[i],height[j]);
//         let area = width * h;
//         max = Math.max(max,area);
//     }
// }
// return max;
// }

// console.log(maxArea(height));


let hight = [1, 8, 6, 2, 5, 4, 8, 3, 7];
var maxArea = function (height) {
  let max = 0;
  let n = height.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let width = j - i;
      let h = Math.min(height[i], height[j]);
      let area = width * h;
      max = Math.max(max, area);
    }
  }
  return max;
};

console.log(maxArea(hight));
