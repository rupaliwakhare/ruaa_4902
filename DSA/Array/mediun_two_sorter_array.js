let nums1 = [1, 3];
let nums2 = [2];


var findMedianSortArrays = function(nums1,nums2){
    let merged = nums1.concat(nums2);
    merged.sort((a,b)=>a-b);
    let n = merged.length;
    if(n%2 === 0){
        return(merged[n/2-1]+merged[n/2])/2;

    }else{
        return merged[Math.floor(n/2)];

    }
}

console.log(findMedianSortArrays(nums1, nums2));

// Dry Run Step by Step
// Input Arrays

// nums1 = [1, 3]

// nums2 = [2]

// Concatenate


// merged = nums1.concat(nums2);
// Result:
// merged = [1, 3, 2]

// Sort

// merged.sort((a, b) => a - b);
// Result:
// merged = [1, 2, 3]

// Length Calculation


// n = merged.length; // 3
// Check Even/Odd

// n = 3 → Odd number

// Odd Case Median


// return merged[Math.floor(n/2)];
// Math.floor(3/2) = Math.floor(1.5) = 1

// merged[1] = 2

// Final Output


// console.log(2);
//  Answer: Median = 2