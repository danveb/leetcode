/* Binary Tree Preorder Traversal (Leetcode #144) 

Problem: Given "root" of binary tree, return preorder traversal of its nodes values. 

root = [1, null, 2, 3] 
output = [1, 2, 3] 

root = []
output = []

1. Brute Force (Iterative) 
- pre-order traversal of binary tree -> ROOT, LEFT, RIGHT 
- initialize a "stack" and push root into the stack 
- initialize output [] 
- keep looping while stack is NOT null 
- "pop" the first element from the stack 
- push value of element to output []
- check: if any children to the left of tree? we'll push to stack
- check: if any children to the right of tree? we'll push to stack 
- return output []

Time: O(n) where n is elements of array; we visit every single node to traverse 
Space: O(n) we use a "stack" data structure 

function preorderTraversal(root) {
    // edge case 
    if(root === null) return [];
    const output = [];
    const stack = [root]; 
    while(stack.length > 0) {
        let currentNode = stack.pop(); 
        output.push(currentNode.val); 
        if(currentNode.right !== null) stack.push(currentNode.right); 
        if(currentNode.left !== null) stack.push(currentNode.left) 
    };
    return output; 
}

=== 

2. Another Approach (recursion) 
- edge case: if root of binary tree is null we can return []
- initialize output array since we want to present [] format 
- process preorder function with root
- preorder helper function 
-- if no root we return null 
-- process value of the root 
-- recursively call left children 
-- recursively call right children 
- return output [] 

Time: O(n) as we visit each of the nodes in tree 
Space: O(h) where h is height of the tree; height is proportional to size of tree 
-- Worst Case: O(n) because a tree can be unbalanced and resemble more a linked list and we visit each node 
-- Best Case: O(log n) when a tree is perfectly balanced 

*/ 

function preorderTraversal(root) {
    // base case
    if(root === null) return []; 
    const output = [];

    // process preorder with root 
    preorder(root); 

    // preorder function
    function preorder(root) {
        if(root === null) return null; 
        // process root first
        output.push(root.val); 
        // process left/right children next 
        preorder(root.left);
        preorder(root.right); 
    };
    return output; 
}