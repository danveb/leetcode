/* Intersection of Linked List (Leetcode #160) 

Problem: Given a linked list find the point where they intersect. 

head1 = [29, 23, 82, 11, 12, 27]
head2 = [13, 4, 12, 27] 
output = intersection at "12" 

head1      -> 4 -> 1 -> 8 -> 4 -> 5
             p1    X    X    X    X
              Y    Y


head2 -> 5 -> 6 -> 1 -> 8 -> 4 -> 5
        p2    Y    Y    Y    Y    Y
         X    X    X

p1 reaches intersection node 1 after 7 steps 
p2 reaches intersection node 1 after 7 steps 

head1   -> 29 -> 23 -> 82 -> 11 -> 12 -> 27 
           p1    X     X     X     X     X  => p1 reaches null after 5 moves 
           Y     Y     Y     Y     Y        => p2 reaches INTERSECTION 12 after 5 moves

head2               -> 13  -> 4 -> 12 -> 27 
                       p2     Y    Y     Y  => p2 reaches null after 3 moves 
                       X      X    X        => p1 reaches INTERSECTION 12 after 3 moves 

                                            = TOTAL 8 moves using head1/head2; returns 12 (node value) 

1. Brute Force 
- if either head1 or head2 is NULL we return null 
- initialize 2 pointers at start of head1 and head2, which move 1 at a time 
- keep looping while pointer1 does NOT equal pointer2
-- move pointer1 at 1 space
-- move pointer2 at 1 space 
-- check: if pointer1 === pointer2 ? we can return either pointer 1 or 2
-- check: if pointer1 reaches NULL? let's make it go to head2 
-- check: if pointer2 reaches NULL? let's make it go to head1 
- return either pointer 1 or 2 

Time: O(n + m) where we traverse two different linked lists 
Space: O(1) we don't incur extra memory 

*/ 

function getIntersectionNode(headA, headB) {
    if(headA === null || headB === null) return null; 
    let pointer1 = headA; 
    let pointer2 = headB; 

    while(pointer1 !== pointer2) {
        // move the pointers to next space 
        pointer1 = pointer1.next; 
        pointer2 = pointer2.next; 

        // check: if pointer1 and pointer2 meet? return pointer1 
        if(pointer1 === pointer2) return pointer1; 

        // check: if pointer1 becomes null? move to headB
        // check: if pointer2 becomes null? move to headA
        if(pointer1 === null) pointer1 = headB;
        if(pointer2 === null) pointer2 = headA; 
    };
    return pointer1; 
}