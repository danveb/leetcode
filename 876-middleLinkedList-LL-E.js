/* Middle of Linked List (Leetcode #876)

Problem: Given "head" of a singly linked list, return the middle node of the
linked list. If there are two middle nodes, return the second middle node. 

head = [1, 2, 3, 4, 5] 
output = [3, 4, 5]; the middle node of the list is node 3

head = [1, 2, 3, 4, 5, 6] 
output = [4, 5, 6]; since the list has two middle nodes with value 3 and 4, 
we return the second one

idx     0    1    2    3    4
        1 -> 2 -> 3 -> 4 -> 5 
       s/f                    => initialize slow/fast pointers 
 
1st iteration  
        1 -> 2 -> 3 -> 4 -> 5
             s    f           => slow = slow.next; fast = fast.next.next
 
2nd iteration  
        1 -> 2 -> 3 -> 4 -> 5
                  s         f => slow at idx2; fast at idx4 which means MID

Notes
- use a 2 pointer technique starting at head position 
- slow pointer will move by 1 place
- fast pointer will move by 2 places 
- by the time fast pointer reaches the end slow will be right in the middle 
- we return the slow pointer (middle node)
***** IF PROBLEM ASKS FOR THE VALUE WE WANT SLOW.VALUE

Approach
- initialize slow pointer at head
- initialize fast pointer at head 
- keep looping while fast !== null && fast.next !== null 
- move slow by 1 place 
- move fast by 2 places 
- return slow; 

Time: O(n) where n is # of nodes visited 
Space: O(1) we don't incur extra memory

*/ 

function middleNode(head) {
    let slow = head; 
    let fast = head; 
    while(fast !== null && fast.next !== null) {
        slow = slow.next; 
        fast = fast.next.next; 
    }
    return slow; 
}