/* Leetcode #21: Merge Two Sorted Linked Lists 

Problem: Given the heads of two sorted linked lists "list1" and "list2". 
Merge the two lists in one sorted list. List should be made by splicing together the nodes of the two lists. 
Return the head of the merged linked list. 

list1 = [1, 2, 4] list2 = [1, 3, 4] 
output = [1, 1, 2, 3, 4, 4] 

Scratchpad: 
list1   1   2   4   
list2   1   3   4   
---------------------------
dummy (-1) -> 1   1   2   3   4   4 

list1   1   2   4
list2   3   8   9   10  
---------------------------
dummy (-1) -> 1   2   3   4   8   9   10 

Time: O(n) 
Space: O(n) 

Notes: 
- initialize a dummyNode as -1 so it can be in front of the linked list (becoming new head) 
- initialize head and set it as dummy 
- keep looping while list1 && list2 have values 
- check: if value in list1 is less than or equal to value in list2 
- we will set dummy.next to point to the correct list (list1) 
- else we will set dummy.next to point to the next list (list2) 
- keep moving dummy to next node 
- check: if list1 is not null we attach remaining elements of list1
- else: attach elements of list2 
- return head.next to return correct linked list (starting after dummy) 

*/ 

function mergeTwoLists(list1, list2) {
    let dummy = new ListNode(-1) 
    let head = dummy 
    while(list1 !== null && list2 !== null) {
        if(list1.val <= list2.val) {
            dummy.next = list1 
            list1 = list1.next 
        } else {
            dummy.next = list2 
            list2 = list2.next 
        }
        dummy = dummy.next 
    }
    if(list1 !== null) {
        dummy.next = list1 
    } else {
        dummy.next = list2
    }
    return head.next;  
}