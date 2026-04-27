// largest num


let large = [23,65,45,77,677]

function findLarge(large){
    let largest = large[0];
    let secondLargest 

    for(let i = 0; i < large.length; i++){
     
        if(largest<large[i]){
            secondLargest = largest;
            largest=large[i]
        }else if(large[i]>secondLargest && large[i] !=largest ){
            secondLargest=large[i]
        } 
    }return secondLargest
}
console.log(findLarge(large));


