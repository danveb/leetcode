/* Visible Tree Node 

In a binary tree, we define a node "visible" when no node on the root-to-itself path (inclusive) has a greater value. The root is always "visible" since there are no other nodes between the root and itself. 

Given a binary tree, count the number of "visible" nodes. 

array = [5, 4, 3, 8, 6] 
output = 3; 3 items are visible based on the scratchpad
Node 4 is NOT visible since 5 > 4, similarly Node 3 is not visible since both 5 > 3 and 4 > 3. 
Node 8 is visible since all 5 <= 8, 4 <= 8, and 8 <= 8

Scratchpad: 

                5           
              /   \
            4      6        
          /   \
         3    8             

Ex. 2
     
                3           
              /    \
            1       8        
          /   \    /  \
         3    4   9    7
             /
            6      
            
1. count all the possible paths from the root node 
2. check if root to currentNode value is >= along the path
- If so it's a visible node 
a) 3 (root) = visible
b) 3 -> 1 = X 
c) 3 -> 1 -> 3 = visible
d) 3 -> 1 -> 4 = visible 
e) 3 -> 1 -> 4 -> 6 = visible
f) 3 -> 8 = visible
g) 3 -> 8 -> 9 = visible
h) 3 -> 8 -> 7 = X, because 8 was bigger along the path 

Time: O(n) -> for n elements in the binary tree 
Space: O(h) -> where H is the height of the binary tree 

Approach: 
- idea is first to traverse the binary tree. Since we need to see the maximum value in the given path, we use pre-order traversal to traverse through the tree. While we traverse the tree we'll keep track of the max value of the node that we have "seen" so far. If current node is greater or equal to the max value then increment the count of visible node and update max value with the current node value. 

Explanation: 
We can DFS on the tree and keep track of the max value we have seen as we go.

1. Decide on the return value -> we want to return TOTAL 
The problem asks for the total number of visible nodes, so we return the total number of visible nodes for the current subtree after we visit a node.

2. Identify states -> 
The definition for a "visible" node is its value is greater than any other node's value on the root-to-itself path. To determine whether the current node is visible or not, we need to know the max value from the root to it. We can carry this as a state as we traverse down the tree.

Having decided on the state and return value we can now write the DFS.

Time Complexity: O(n)

There are n nodes and n - 1 edges in a tree so if we traverse each once then the total traversal is O(2n - 1) which is O(n).

*/ 

function goodNodes(root) {
    // initialize DFS helper function 
    function dfs(node, maxValue) {
        // edge case: if no node we'll return 0
        if(!node) return 0 

        // initialize total at 0 
        let total = 0 
        // check: if value of node is >= than maxValue 
        if(node.val >= maxValue) {
            // update total by 1 
            total++ 
        }

        maxValue = Math.max(maxValue, node.val) 
        total += dfs(node.left, maxValue)
        total += dfs(node.right, maxValue)
        
        return total; 
    }

    return dfs(root, root.val) 
}