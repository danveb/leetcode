/* Odd Even Linked List (Leetcode #328) 

Problem: Given "head" of a linked list, group all nodes with odd indices first, followed by even indices. 
Return the reordered list. 

head = [1, 2, 3, 4, 5]
output = [1, 3, 5, 2, 4] 

                
        1   ->  2   ->  3   ->  4   ->  5   ->  null 
       odd   even/EH                                      => odd starts at head; even starts at head.next; evenHead starts at even (for reference only) 

        1   ->  2   ->  3   ->  4   ->  5   ->  null 
                        o       e                         => odd.next points to even.next; even.next points to odd.next

        1   ->  2   ->  3   ->  4   ->  5   ->  null 
                                        o        e        => odd reaches end; even reaches null 

        1   ->  3   ->  5   ->  2   ->  4   ->  null 
                        o    e/evenH                      => we connect o.next to evenH so that 5 goes to 2

Notes
- given "head" of a linked list 
- odd indices must come first, even indices should come after odd 
- use 2 pointer approach, where we set pointers for odd/even which are in head/head.next 
- keep iterating while even && even.next 
- move odd indices first 
-- odd.next points to even.next 
-- odd = odd.next 
-- even.next points to odd.next
-- even = even.next 
- once finished looping we want to set odd.next to evenHead so it connects 5 with 2
- return head

Time: O(n) where n is # of nodes we visited 
Space: O(1) we don't incur additional memory

*/ 

function oddEvenList(head) {
    // edge case: if head === null we return null 
    if(head === null) return null; 
    // place odd/even pointers and save reference to evenHead
    let odd = head; 
    let even = head.next; 
    let evenHead = even; 
    while(even !== null && even.next !== null) {
        // move odd pointers 
        odd.next = even.next; 
        odd = odd.next; 
        // move even pointers
        even.next = odd.next; 
        even = even.next; 
    }
    // point odd.next to evenHead to connect last odd with first even 
    odd.next = evenHead; 
    return head; 
}