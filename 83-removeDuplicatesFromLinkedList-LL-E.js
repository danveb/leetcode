/* Remove Duplicates from Linked List (Leetcode #83) 

Problem: Given "head" of a linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well. 

head = [1, 1, 2] 
output = [1, 2] 

        1   ->  1   ->  2   ->  null
        c   .n      .n

        1   ->  2   ->  null

head = [1, 1, 2, 3, 3] 
output = [1, 2, 3] 

        1   ->  1   ->  2   ->  3   ->  3   ->  null
        c   .n      .n

        1   ->  2   ->  3   ->  3   ->  null
                c   .n
                        c   .n      .n

        1   ->  2   ->  3   ->  null

Notes
- we are given a linked list with some duplicate values
- our goal is to remove those duplicates and return the linked list
- we want a current node set to the head of linked list so we can traverse through it 
- we'll check: if value of current is equal to value of current.next ? 
- we want to set current.next to current.next.next 
- else we keep iterating current to current.next 
- return head of linked list

Approach
- initialize current and set this to the head
- keep looping while current && current.next !== null 
- check: if value of current === value of current.next ? 
- we'll set current.next to current.next.next 
- just keep moving current to current.next 
- return head of linked list

Time: O(n) where n is # of nodes visited
Space: O(1) we don't incur extra memory

Alternative with Hashset -> O(n) space 
function deleteDuplicates(head) {
    const hashset = new Set() 
    hashset.add(head.val) 
    let current = head 
    while(current.next !== null) {
        if(hashset.has(current.next.val)) {
            current.next = current.next.next 
        } else {
            hashset.add(current.next.val) 
            current = current.next 
        }
    }
    return head; 
}

*/ 

function deleteDuplicates(head) {
    let current = head; 
    while(current !== null && current.next !== null) {
        if(current.val === current.next.val) {
            current.next = current.next.next; 
        } else {
            current = current.next;
        }
    }
    return head; 
}