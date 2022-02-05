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

Time: O(n) 

Approach: 
- to find the kth element we take "K" and get the Kth value from the tree (ex. k = 3 so we'll take 3rd smallest element from the tree. take into account 1-index array)
- traverse binary tree with "in-order" traversal of BST (left, self, right) and call the function 
- with a "sorted" array due to "in-order" traversal we return the array with [k-1] to get correct idx 

*/ 

function kthSmallest(root, k) {

    const array = [] 

    function inOrder(node) {
        if(root === null) return;  

        inOrder(node.left) 
        array.push(node.val)
        inOrder(node.right) 
    }
    inOrder(root) 

    return array[k - 1] 
}