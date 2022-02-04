/* Middle of Linked List (Leetcode #876) 

Problem: Find the middle node of a linked list 

nodes = 0 -> 1 -> 2 -> 3 -> 4 
output = 2; the value of middle node is 2 

Scratchpad: 

idx 0   1   2   3   4
num 0   1   2   3   4
    f       f       f   => fast reaches end of linked list 
    s   s   s           => slow reaches mid of linked list now 

Notes: 
- initialize slow pointer at head of linked list
- initialize fast pointer at head of linked list 
- keep looping while fast !== null && fast.next !== null 
- slow moves at 1x speed 
- fast moves at 2x speed 
- return value of slow pointer 

Time: O(n) for n # of elements in the array 

*/ 

function middleOfLinkedList(head) {
    let slow = head
    let fast = head
    while(fast !== null && fast.next !== null) {
        slow = slow.next 
        fast = fast.next.next 
    }
    return slow.val; 
}