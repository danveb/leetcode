/* Palindrome Linked List (Leetcode #234) 

Problem: Given "head" of a linked list return "true" if it's a palindrome. 
Return false otherwise. 

head = [1, 2, 2, 1] 
output = true; idx0 and idx3 are equal; idx1 and idx2 are equal 

head = [1, 2]
output = false; idx0 and idx1 are NOT equal 

idx     0    1    2    3
num     1 -> 2 -> 2 -> 1 -> null 
       s/f                        => slow jumps 1 place; fast jumps 2 places
             s    f               => keep moving slow/fast pointers
                  s         f     => when slow reaches the middle we reverse the linked list 
    
        1 -> 2 -> 2 -> null 
        f                         => slow/fast now move at 1 place and we compare if === 
             f                    => equal to slow

        1 -> 2 -> null 
        s                         => slow/fast now move at 1 place and we compare if === 
             s                    => equal to fast
                   s              => when slow reaches null on 2nd linked list it means IT"S A PALINDROME!
 

Notes
- we are given a "head" of the linked list 
- we need to check if it's a palindrome or not 
- typically to check palindromes we would want to have 2 pointers (1 at beginning + 1 at end) that check if they're equal and move inwards
- if we use a slow/fast pointer approach, when our fast reaches the end we'll have slow at the middle node
- from the middle we plan to reverse the linked list and check for equality between 1st half and 2nd half by moving pointers at 1 place together
- when slow reaches null on 2nd list we know it's a palindrome

Approach
- initialize slow pointer at head; fast pointer at head
- keep looping while fast && fast.next because we want to cover case for odd && even linked list
- slow moves at 1x speed; fast moves at 2x speed 
- after fast reaches null we should have slow at mid section
- we'll move back fast pointer back to head; 
- set slow to reverse(slow) -> helper function that reverses linked list 
- keep looping while slow !== null 
- check: if value of fast !== value of slow ? we return false 
- just keep moving slow = slow.next 
- keep moving fast = fast.next 
- in the end we return true

Time: O(n) where n is # of nodes we traverse 
Space: O(1) we don't incur extra memory

*/ 

// class Node 
class Node {
    constructor(value) {
        this.value = value; 
        this.next = null; 
    };
}; 

function isPalindrome(head) {
    let slow = head; 
    let fast = head; 
    // we use both fast && fast.next to cover odd/even linked lists
    // when even we have slow at middle and fast at null 
    // when odd we have slow at middle and fast before null
    while(fast !== null && fast.next !== null) {
        slow = slow.next; 
        fast = fast.next.next; 
    }

    // move back fast pointer back to head 
    fast = head; 
    // set slow to reverse(slow) -> helper function to reverse linked list 
    slow = reverse(slow); 
    // keep looping slow because it's shorter
    while(slow !== null) {
        // check if values of slow/fast are equal
        if(slow.value !== fast.value) {
            return false; 
        }

        // move slow by 1
        slow = slow.next; 
        // move fast by 1
        fast = fast.next; 
    }
    return true; 
}

// helper function reverse linked list
function reverse(head) {
    // initialize prev as null -> this will be the tail
    let prev = null; 
    let current = head; 
    // keep looping while current !== null 
    while(current !== null) {
        let temp = current.next; 
        current.next = prev; 
        prev = current; 
        current = temp; 
    }
    return prev; 
}