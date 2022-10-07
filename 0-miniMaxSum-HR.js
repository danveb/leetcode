/* Mini Max Sum Challenge (HR) 

Problem: Given an array of 5 positive integers, find the min/max values that can be
calculated by summing exactly four of five integers. Print respective minimum and 
maximum values as a single line. -> (minSum, maxSum) 

array = [1,3,5,7,9]
output = 16 24 

Brute Force
1. find min/max values from array and keep track of total sum of elements - min / max 
- initialize min as Infinity
- initialize max as -Infinity 
- initialize totalSum at 0
- iterate over input array once (i at 0 until end)
- check: if current < min ? set min to current 
- check: if current > max ? set max to current 
- keep adding totalSum += current element 
- console.log(totalSum - max, totalSum - min) -> minSum, maxSum

Time: O(n) where n is # elements in input array
Space: O(1) we don't incur extra memory 

*/ 

function miniMaxSum(array) {
    let min = Infinity; // any number lesser than Infinity becomes min
    let max = -Infinity; // any number greater than -Infinity becomes max
    let totalSum = 0; 
    
    for(let i = 0; i < array.length; i++) {
        if(array[i] < min) min = array[i]; 
        if(array[i] > max) max = array[i]; 
        totalSum += array[i]; 
    };

    // sum - max gets us MINSUM 
    // sum - min gets us MAXSUM
    console.log(totalSum - max, totalSum - min); 
};

console.log(miniMaxSum([1,3,5,7,9])); 
console.log(miniMaxSum([5,5,5,5,5])); 