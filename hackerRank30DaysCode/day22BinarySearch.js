// Task
// The height of a binary search tree is the number of edges 
// between the tree's root and its furthest leaf. You are 
// given a pointer, , pointing to the root of a binary 
// search tree. Complete the getHeight function provided 
// in your editor so that it returns the height of the 
// binary search tree.

// Input Format
// The locked stub code in your editor reads the following 
// inputs and assembles them into a binary search tree:
// The first line contains an integer, n, denoting the 
// number of nodes in the tree.
// Each of the n subsequent lines contains an integer, data, 
// denoting the value of an element that must be added 
// to the BST.

function height(root, maxHeight = -1) {
    if (root) {
    maxHeight += 1;
    return Math.max(height(root.left, maxHeight),
                    height(root.right, maxHeight));
    } else {
    return maxHeight;
    }
}

return height(root);
