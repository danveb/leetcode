/* Find Smallest Common Number In Arrays (Leetcode #1198)

Problem: Given three integer arrays sorted in ascending order, return the smallest number found in all 3 arrays. Return -1 if no common number is found. 

array1 = [6, 7, 10, 25, 30, 63, 64] 
array2 = [0, 4, 5, 6, 7, 8, 50] 
array3 = [1, 6, 10, 14] 
output = 6 is the smallest common number found in the arrays

idx     0   1   2   3   4   5   6 
num1    6   7   10  25  30  63  64
        p1

num2    0   4   5   6   7   8   50
        p2  p2  p2  p2

num3    1   6   10  14
        p3  p3

        - p2 is the lowest number; increase p2
        - p3 is the lowest number; increase p3
        - p2 is lowest; increase p2 
        - p2 is lowest; increase p2

Approach -> Time: O(n) where n is the # of elements on each array 
         -> Space: O(1) no additional memory required 
- iterate over each of the arrays once 
- initialize pointers at beginning of each array 
- keep looping as long as each pointer is less than the length of each array
- main check: if each pointer points to the same number we know this is the lowest number
- return any number from the array that is the lowest
- check #1: if value of pointer1 < value of pointer2 && value of pointer2 < value of pointer3 
- increase pointer1 by 1
- check #2: if value of pointer2 < value of pointer1 && value of pointer2 < value of pointer 3 
- increase pointer2 by 1
- check #3: if value of pointer3 < value of pointer1 && value of pointer3 < value of pointer 2 
- increase pointer3 by 1
- after checking everything we can return -1 if no least common number

*/ 

function findLeastCommonNumber(array1, array2, array3) {
    let p1 = 0
    let p2 = 0
    let p3 = 0
    while(p1 < array1.length && p2 < array2.length && p3 < array3.length) {
        if(array1[p1] === array2[p2] && array2[p2] === array3[p3]) {
            return array1[p1] 
        }
        // check value of p1: if smallest of all increase by 1
        if(array1[p1] <= array2[p2] && array2[p2] <= array3[p3]) {
            p1++ 
            // check value of p2: if smallest of all increase by 1
        } else if (array2[p2] <= array1[p1] && array2[p2] <= array3[p3]) {
            p2++ 
            // check value of p3: if smallest of all increase by 1
        } else if (array3[p3] <= array1[p1] && array3[p3] <= array2[p2]) {
            p3++ 
        }
    }
    return -1
};

console.log(findLeastCommonNumber([6, 7, 10, 25, 30, 63, 64], [0, 4, 5, 6, 7, 8, 50], [1, 6, 10, 14]))