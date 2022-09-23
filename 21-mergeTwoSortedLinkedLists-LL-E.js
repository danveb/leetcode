/* Merge Two Sorted Linked Lists (Leetcode #21)

Problem: Given heads of two sorted linked lists (list1, list2), merge them to 1.
Return the head of the merged linked list. 

list1 = [0, 3, 4]
list2 = [1, 2, 6]
output = [0, 1, 2, 3, 4, 6] 

list1   0   3   4   -> null
list2   1   2   6   -> null
--------------------------- 
output  -1 -> 0   1   2   3   4   6 -> null 

Approach
- since we don't have a node to start we'll want a dummy at -1
- initialize head as the dummy so we can keep track of the head 
- keep looping while list1 and list1 are !== null 
- check which list goes first by comparing if value of list1 < value of list2
- if true...  
-- set head.next to point to this list1
-- set list1 to list1.next 
- else... 
-- set head.next to point to list2
-- set list2 to list2.next 
- outside of while loop we want to check if list1 !== null
-- if so, head.next = list1
- outside of while loop we want to check if list2 !== null 
-- if so, head.next = list2
- RETURN DUMMY.NEXT since this is the start of head

Time: O(n + m) where n + m represents lengths of two linked lists 
Space: O(1) we don't incur extra memory

=== 

class ListNode {
	constructor(value) {
		this.value = value; 
		this.next = null; 
	}
}

*/ 

function mergeTwoLists(list1, list2) {
	// edge case: if no linked lists we return null 
	if(list1 === null && list2 === null) return null; 
	let dummyHead = new ListNode(-1); 
	let head = dummyHead; 
	while(list1 !== null && list2 !== null) {
		// check which list goes first 
		// if both lists have same value either can go... 
		// set head.next to list1 and list1 to list1.next
		if(list1.value <= list2.value) {
			head.next = list1; 
			list1 = list1.next; 
		} else {
			// set head.next to list2 and list2 to list2.next
			head.next = list2; 
			list2 = list2.next; 
		}
		// keep looping head
		head = head.next; 
	}; 
	// if either list is NOT NULL we want to continue with head.next
	// already head -> head.next 
	// now we need head.next -> list1 or list2
	if(list1 !== null) head.next = list1; 
	if(list2 !== null) head.next = list2; 
	// return new HEAD OF LINKED LIST 
	return dummyHead.next; 
}