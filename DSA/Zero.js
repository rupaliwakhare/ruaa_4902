// Move all zeros to the end

let arr = [0,1,0,3,12]

function zero(arr){
    let result = [];
    let x = 0;
    for (let i = 0; i<arr.length; i++){
         if(arr[i] !== 0) result.push(arr[i])
            else x++
    }
       
        console.log(result);
        
}
zero(arr)

// [1,3,12]