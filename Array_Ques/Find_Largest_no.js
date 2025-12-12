  let a = [4,5,6,9,2,7];
  let max = a[0];
  const findLargestFun = (a)=>{
    for(let num of a){
        if(num>max){
            max = num
        }
    }
    return max;
  }
  console.log(findLargestFun(a));


//   Dry Run
// step1 4>4 = false max=4
// step2 5>4 = true  max=5
// step3 6>5 = true  max=6
// step4 9>6 = true  max=9
// step5 2>9 = false max=9
// step6 7>9 = false max=9

// output= 9

  