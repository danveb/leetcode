/* Convert Binary in Linked List to Integer (Leetcode #1290) 

Problem: Given "head" of a linked list, return the decimal value of 
number in the linked list. 

head = [1, 0, 1]
output = 5; 101 in base2 = 5 

head = [0]
output = 0

idx     0   1   2
num     1 - 0 - 1 -> null 
        h n h n h 
        e e   e
        a x   x
        d t   t

1. Brute Force 
- initialize totalSum as empty string 
- keep looping while head !== null 
-- add value of head to totalSum 
-- move head to head.next 
- return parseInt(totalSum, 2)

Time: O(n) where we visit every node in linked list
Space: O(1) we don't incur extra memory 

*/ 

function getDecimalValue(head) {
    let totalSum = "";
    while(head !== null) {
        totalSum += head.val; // "101"
        head = head.next; 
    }; 
    return parseInt(totalSum, 2); 
}