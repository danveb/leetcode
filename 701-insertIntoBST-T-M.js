/* Insert Into BST (Leetcode #701) 

Problem: Given "root" of a binary search tree and "value", return the root after inserting "value" Into BST. 

root = [4, 2, 7, 1, 3] val = 5
output = [4, 2, 7, 1, 3, 5] 

root = [40, 20, 60, 10, 30, 50, 70] val = 25
output = [40, 20, 60, 10, 30, 50, 70, null, null, 25] 

                   4           - value is greater than root; so we'll look into right subtree
                /     \        - value is less than current node so we'll place in left subtree
               2       7       - return root
             /  \              
            1    3             
           
Notes
- perform DFS recursion traversal
- since this is BST we know at the root: if val > root ? it should go to right subtree; if val < root ? go left subtree 
- return root 

Time: O(n) where n is # of nodes we visit; IF TREE IS BALANCED we'd only have O(log n) 
Space: O(n) for recursion call stack // O(1) iterative

*/

class Node {
    constructor(value) {
        this.value = value; 
        this.left = null; 
        this.right = null; 
    }
}

const four = new Node(4); 
const two = new Node(2); 
const seven = new Node(7); 
const one = new Node(1); 
const three = new Node(3); 

four.left = two; 
four.right = seven; 
two.left = one; 
two.right = three; 

console.log(four); 

function insertIntoBST(root, val) {
    debugger; 
    // base case: if root is null we'll add a new Node with value "val" 
    if(root === null) return new Node(val); 
    // check: if val < root? go left subtree 
    if(val < root.val) {
        root.left = insertIntoBST(root.left, val); 
    // check: if val > root? go right subtree 
    } else {
        root.right = insertIntoBST(root.right, val); 
    }
    return root; 
}