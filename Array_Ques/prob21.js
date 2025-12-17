// Remove duplicates without using Set.
let arr = [1, 2, 3, 2, 4, 1, 5];
let result = [];
let k = 0;

for (let i = 0; i < arr.length; i++) {
    let duplicate = false;

   
    for (let j = 0; j < k; j++) {
        if (arr[i] === result[j]) {
            duplicate = true;
            break;
        }
    }

   
    if (!duplicate) {
        result[k] = arr[i];
        k++;
    }
}

console.log(result); 

// dryrun
// i = 0 → arr[i] = 1
// duplicate = false → result = [1]

// i = 1 → arr[i] = 2
// duplicate = false → result = [1, 2]

// i = 2 → arr[i] = 3
// duplicate = false → result = [1, 2, 3]

// i = 3 → arr[i] = 2
// duplicate = true  → result = [1, 2, 3]

// i = 4 → arr[i] = 4
// duplicate = false → result = [1, 2, 3, 4]

// i = 5 → arr[i] = 1
// duplicate = true  → result = [1, 2, 3, 4]

// i = 6 → arr[i] = 5
// duplicate = false → result = [1, 2, 3, 4, 5]

