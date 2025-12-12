let a = [3, 4, 6, 2, 1, 0, 5];
let small = a[0];
const findSmallestFun = (a) => {
  for (let num of a) {
    if (num < small) {
      small = num;
    }
  }
  return small;
};
console.log(findSmallestFun(a));

//   Dry Run
// step1  3<3 = false   max=3
// step2  4<3 = false   max=3
// step3  6<3 = false   max=3
// step4  1<3 = true    max=1
// step5  0<1 = true    max=0
// step6  5<0 = false   max=0


// output = 0
