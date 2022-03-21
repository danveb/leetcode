/* Kth smallest number in BST (Leetcode #230)

Problem: Given the root node of a valid BST and a number "K" return the "Kth" smallest number in BST (1-indexed) 

Scratchpad: 

Ex. root = [5, 3, 6, 2, 4, null, null, 7, 1] k = 3

                  5
                /   \
               3     6
             /  \     
            2   4      
           /
          1
idx + 1   1  2  3  4  5  6  7
sorted = [1, 2, 3, 4, 5, 6, 7] 
"Kth" element is 3 because k = 3 

Time: O(n) -> per n elements 
Space: O(n) -> using array to hold inOrder traversal elements

Notes: 
- to find the kth element we take "K" and get the Kth value from the tree (ex. k = 3 so we'll take 3rd smallest element from the tree. take into account 1-index array)
- traverse binary tree with "in-order" traversal of BST (left, self, right) and call the function 
- with a "sorted" array due to "in-order" traversal we return the array with [k-1] to get correct idx 

Approach: 
1. function kthSmallest(root, k) 
- edge case: if root is null we return 0
- initialize array as inOrder(root, []) 
- return array[k-1] 

2. function inOrder(node, array) 
- check: if node !== null we want to do something 
- call inOrder(node.left, array)
- array.push(node.val)
- call inOrder(node.right, array)
- return array 

*/ 

function kthSmallest(root, k) {
  if(root === null) return 0
  let array = inOrder(root, []) 
  return array[k-1]
}

// Helper function inOrder(node, array) 
function inOrder(node, array) {
  if(node !== null) {
    inOrder(node.left, array) 
    array.push(node.val) 
    inOrder(node.right, array) 
  }
  return array; 
}