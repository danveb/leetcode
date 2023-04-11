/* Reverse a Linked List (Leetcode #206)

Problem: Given "head" of linked list, reverse the list and return it. 

head = [1,2,3,4,5]
output = [5,4,3,2,1]

        1 -> 2 -> 3 -> 4 -> 5 -> null 

idx     0   1   2   3   4
num     1   2   3   4   5 -> null 

null <- 1   2   3   4   5 -> null
p       c                   -> current.next -> prev, prev = current, current = current.next 

null <- 1 <- 2  3   4   5 -> null
        p    c              -> current.next -> prev, prev = current, current = current.next 

null <- 1 <- 2 <- 3 4   5 -> null
             p    c         -> current.next -> prev, prev = current, current = current.next 

null <- 1 <- 2 <- 3 <- 4 5 -> null
                  p    c    -> current.next -> prev, prev = current, current = current.next 

null <- 1 <- 2 <- 3 <- 4 <- 5 -> null
                       p    c   -> current.next -> prev, prev = current, current = current.next 

null <- 1 <- 2 <- 3 <- 4 <- 5 -> null
                            p    c  -> we can return prev now and it's the new head 

Approach
- we want to reverse the linked list so that 1-2-3-4-5 is 5-4-3-2-1
- initialize "prev" var as null, which will act as the tail 
- keep looping while head !== null 
- old school loop
-- initialize temp as head.next
-- head.next = prev
-- prev = head
-- head = temp 
- return prev; 

Time: O(n) where n is length of linked list
Space: O(1) we don't incur extra memory

=== 

class ListNode {
	constructor(value) {
		this.value = value; 
		this.next = null; 
	}
}

*/ 

function reverseList(head) {
	// edge case: if no linked list we return null 
	if(head === null) return null; 
	let prev = null; 
	while(head !== null) {
		// old school swap 
		// initialize temp holding head.next
		// head.next points backwards (to prev)
		// prev points to head 
		// head back to temp
		let temp = head.next; 
		head.next = prev; 
		prev = head; 
		head = temp; 
	}
	// return prev which made it to end of linked list
	return prev; 
}