let arr = [10,20,30,40];

function searchElement(arr){
    target = 30;

    let found = arr.includes(target);

    return found;
}

console.log(searchElement(arr));
