let arr = [1,2,2,3,3,3,4,4,5,5,7,2]

function freq (){
    let count = {}
    arr.forEach(num=>{
        count[num]=(count[num]|| 0)+1;
    })

    return count
}

console.log(freq(arr));
