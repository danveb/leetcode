/* Remove Nth Node From End of Linked List (Leetcode #19)

Problem: Given "head" of a linked list remove the "nth" node from the end of the list and return its head. 

head = [1, 2, 3, 4, 5] n = 2
output = [1, 2, 3, 5] 

    1   ->  2   ->  3   ->  4   ->  5   ->  null

prev
 -1  ->   ->  1   ->  2   ->  3   ->  4   ->  5   -> null 
 slow     fast
                  fast     fast
          slow    slow     slow    fast    fast    fast
                            (slow.next = slow.next.next)

Notes
- traverse from right to left using 2 pointers, by the time slow pointer reaches 1 node before n = 2 we will set it to .next.next so it references last node
- initialize dummy as new Node (-1) 
- set dummy.next equal to head 
- initialize slow at dummy 
- initialize fast at head
- keep looping while fast && n > 0 
- set fast to fast.next 
- decrease n by 1  
- keep looping while fast 
- set slow to slow.next 
- set fast to fast.next 
- set slow to slow.next.next
- return dummy.next 

Time: O(n) where n is # of nodes we traverse 
Space: O(1) we don't incur extra memory

*/ 

class Node {
    constructor(value) {
        this.value = value; 
        this.next = null; 
    }; 
}; 

function removeNthFromEnd(head, n) {
    // initialize dummy to be a new Node (any value) 
    // and link dummy to the head
    let dummy = new Node(-1); 
    dummy.next = head; 

    // initialize slow pointer at dummy 
    let slow = dummy; 

    // initialize fast pointer at head
    let fast = head; 

    // keep looping while fast && n > 0 
    // this condition breaks when fast reaches near middle 
    // n should be at 1
    while(fast !== null && n > 0) {
        fast = fast.next; 
        n -= 1; 
    }; 

    // keep looping while fast !== null  
    while(fast !== null) {
        slow = slow.next; 
        fast = fast.next; 
    }

    // at this point fast reaches null and slow should be before n = 2
    // reset slow.next to be .next.next
    slow.next = slow.next.next 

    // return the new head
    return dummy.next; 
}