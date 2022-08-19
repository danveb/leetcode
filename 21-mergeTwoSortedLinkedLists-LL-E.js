/* Merge Two Sorted Linked Lists (Leetcode #21)

Problem: Given heads of two sorted linked lists, merge the two lists into 1 sorted list. 
Return the head of merged linked list. 

class Node {
    constructor(value) {
        this.value = value; 
        this.next = null; 
    };
}; 

list1 = [1, 2, 4] 
list2 = [1, 3, 4] 
output = [1, 1, 2, 3, 4, 4] 

list1 = []
list2 = []
output = []

list1 = []
list2 = [0] 
output = [0] 

list1   1   2   4   -> null
list2   1   3   4   -> null
---------------------------
output  -1 -> 1   1   2   3   4   4 -> null 

list1   1   2   4
list2   3   8   9   10  
---------------------------
output  -1 -> 1   2   3   4   8   9   10 -> null 

Notes 
- we are given two linked lists and the head of each one
- our goal is to merge the lists into 1 and return the head of linked list 
- by default we can initialize newHead and make it a dummy with value of -1  
- we can set newHead.next to p1 (if same value to p2) 
- by having 2 extra pointers for p1/p2 referring to each linked list we are going to traverse
- we can set a variable current set to each of the heads
- we keep looping while current !== null 
- check: if value of p1 <= p2 we'll go ahead and current.next to the p 
- return the new head 

Approach: 
- initialize a dummyNode as -1 so it can be in front of the linked list (becoming new head) 
- initialize head and set it as dummy 
- keep looping while list1 && list2 have values 
- check: if value in list1 is less than or equal to value in list2 
- we will set dummy.next to point to the correct list (list1) 
- else we will set dummy.next to point to the next list (list2) 
- keep moving dummy to next node 
- check: if list1 is not null we attach remaining elements of list1
- else: attach elements of list2 
- return head.next to return correct linked list (starting after dummy) 

Time: O(n + m) where n + m are the lenghts of two linked lists
Space: O(1) we don't incur extra memory

*/ 

// initialize class Node
class Node {
    constructor(value) {
        this.value = value; 
        this.next = null; 
    }; 
}; 

function mergeTwoLists(list1, list2) {
    // edge case: if both lists are empty we'll just return empty []
    if(list1 === null && list2 === null) return []; 
    let dummyHead = new Node(-1); 
    let head = dummyHead; 
    while(list1 !== null && list2 !== null) {
        if(list1.value <= list2.value) {
            dummyHead.next = list1; 
            list1 = list1.next; 
        } else {
            dummyHead.next = list2; 
            list2 = list2.next; 
        }
        // keep our dummyHead moving to the next
        dummyHead = dummyHead.next; 
    }
    if(list1 !== null) dummyHead.next = list1;
    if(list2 !== null) dummyHead.next = list2; 
    return head.next; 
}