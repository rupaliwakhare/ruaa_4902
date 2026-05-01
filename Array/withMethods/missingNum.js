let arr = [1,2,4,5];

function findMissing(arr,n){
    let expectedSum = (n*(n+1))/2;
    let acturalSum = arr.reduce((acc,val)=>acc+val,0);
    return expectedSum-acturalSum;

}

console.log(findMissing(arr,5));
