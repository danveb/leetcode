/* Leetcode #141: Linked List Cycle 

Problem: Given the "head" of a linked list determine if the linked list has a "cycle" in it. 
There is a cycle if there's some node in the list that can be reached again by following the "next" pointer. 
Internally "pos" is used to denote the index of the node that tail's "next" pointer is connected to. 
Return true if there's a cycle in the linked list. Else return false. 

head = [3, 2, 0, -4] pos = 1
output = true; there's a cycle where the tail connects to the 1st node (0-index)

head = [1, 2] pos = 0
output = true; there's a cycle where the tail connects to the 0th node 

head = [1] pos = -1 
output = false; there's no cycle 

Scratchpad: 
3   ->  2   ->  0   ->  -4      (idx 1: goes back to 2)
s       s       s       s   => slow/fast pointers meet at -4
---------------------------
f               f         
        f               f

Time: O(n) 
Space: O(n) 

Notes: 
- when there's a cycle we think about fast/slow pointers. By moving at different speeds the 2 pointers are bound to meet. 
- initialize slow and fast pointers starting at the head 
- keep looping while we have fast & fast.next !== null 
- advance slow pointer by 1 (next) 
- advance fast pointer by 2 places (next.next) 
- check: if slow meets fast we have a cycle
- return false at the end... 

*/ 

function hasCycle(head) {
    let slow = head 
    let fast = head 
    while(fast && fast.next) {
        slow = slow.next 
        fast = fast.next.next 
        if(slow === fast) {
            return true 
        }
    }
    return false; 
}