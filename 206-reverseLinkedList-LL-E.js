/* Leetcode #206: Reverse A Linked List 

Problem: Given the "head" of a linked list reverse it, and return the reversed list. 

head = [1, 2, 3, 4, 5] 
output = [5, 4, 3, 2, 1] 

head = [1, 2] 
output = [2, 1] 

Scratchpad: 
        1 -> 2 -> 3 -> 4 -> 5 -> null 

null -> a -> b -> c -> d -> null 
null <- a -> b -> c -> d -> null 
null <- a <- b -> c -> d -> null 
null <- a <- b <- c -> d -> null 
null <- a <- b <- c <- d 

p       c    n
        p    c    n 
            p    c    n
                    p    c     n
                        p     c (NULL) 

Time: O(n) 
Space: O(n) 

Notes: 
- initialize 2 pointers: current as head and prev as null 
- keep looping while current is present 
- initialize temp as current.next 
- set current.next to prev 
- set prev to current 
- set current to be next 
- return prev (as head of linked list) 

*/ 

function reverseList(head) {
    // initialize current var to be the head 
    let current = head 
    // initialize prev var as null (we'll use it when reversing the linked list) 
    let prev = null 
    // keep looping while current is present 
    while(current !== null) {
        // initialize temp and save its reference 
        let temp = current.next 
        // have current.next point towards prev (null) 
        current.next = prev 
        // move prev to current place 
        prev = current 
        // move current to temp
        current = temp
    }
    // return the new head of linked list at prev 
    return prev; 
}