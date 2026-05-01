let arr = [1, 2, 3, 4, 5];

function sumElement (arr){
    let sum = arr.reduce((acc,value)=>acc+value,0);
    return sum
}
console.log(sumElement(arr));
