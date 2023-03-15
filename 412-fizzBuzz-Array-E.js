/* Fizz Buzz (Leetcode #412) 

Problem: Given integer "n", return a string array "answer" where: 
- divisible by 3 and 5? "FizzBuzz" 
- divisible by 3? "Fizz"
- divisible by 5? "Buzz" 
- none of the above? "i"

n = 3 
output = ["1", "2", "Fizz"] 

n = 5
output = ["1", "2", "Fizz", "4", "Buzz"]

1. Brute Force 
- iterate 1 through n
- check: if current element is divisible by 3 && 5? "FizzBuzz" 
- check: if current element is divisible by 3? "Fizz"
- check: if current element is divisible by 5? "Buzz"
- else... print "i" 

Time: O(n) input integer, at worst we loop through all numbers from 1 to n 
Space: O(n) as we need an output array 

*/ 

function fizzBuzz(n) {
    if(n === 0) return []; 
    const output = []; 
    for(let i = 1; i <= n; i++) {
        // check conditions
        if(i % 3 === 0 && i % 5 === 0) {
            output.push("FizzBuzz"); 
        } else if(i % 3 === 0) {
            output.push("Fizz"); 
        } else if(i % 5 === 0) {
            output.push("Buzz"); 
        } else {
            output.push(`${i}`)
        };
    };
    return output; 
};

console.log(fizzBuzz(3)); 