/* Linked List Cycle (Leetcode #141)

Problem: Given the "head" of a linked list, determine if this list has a cycle. 
A cycle is when there's a node in the linked list that can be reached again by continuously following the "next" pointer. 
Return true if there's a cycle; else return false. 

head = [3, 2, 0, -4] pos = 1
output = true, cycle present in position 1 where the tail connects to the 1st node (0-indexed)

head = [1, 2] pos = 0 
output = true, cycle present in position 0, where tail connects to 0th node

idx     0       1       2       3
        3   ->  2   ->  0   ->  4    GOES BACK TO 2 -> 0 -> 4
       s/f                           => initialize slow/fast pointers 
 
1st iteration  
        3   ->  2   ->  0   ->  4
                s       f            => slow moves to slow.next; fast moves to fast.next.next
 
2nd iteration  
        3   ->  2   ->  0   ->  4
                f       s           => slow at idx2; fast at idx1 

3rd iteration  
        3   ->  2   ->  0   ->  4                                
                                s/f => slow at idx 3; fast at idx3 they met! 


Notes
- to detect cycles we can use 2 pointers that run at different times
- slow pointer moves 1 node to the next (next only) 
- fast pointer moves 2 nodes to the next (next.next)
- iterate through the array once while visiting all the nodes
- if slow meets fast pointer then there's a cycle 

Approach
- initialize slow pointer at head
- initialize fast pointer at head 
- keep looping while fast && fast.next are NOT NULL since reaching the end means there's no cycle
- slow pointer moves by 1 place (next) 
- fast pointer moves by 2 places (next.next)
- check: if slow meets fast ? we return true 
- return false 

Time: O(n) for looping through the array once
Space: O(1) we don't incur extra memory
    
*/ 

function hasCycle(head) {
    let slow = head; 
    let fast = head; 
    while(fast && fast.next) {
        slow = slow.next; 
        fast = fast.next.next; 

        if(slow === fast) {
            return true; 
        }
    }
    return false; 
}