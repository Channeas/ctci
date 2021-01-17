// Validate BST
export default function validBST(node) {
    // Check that the node exists
    if (!node) {
        return true;
    }

    // Make sure the left node's val is smaller than or equal to the current node's val
    if (node.left && node.left.val > node.val) {
        // If not, return false
        return false;
    }

    // Make sure the left node's val is smaller than or equal to the current node's val
    if (node.right && node.right.val <= node.val) {
        // If not, return false
        return false;
    }

    // Check the subtrees
    const leftTreeValid = validBST(node.left),
        rightTreeValid = validBST(node.right);

    if (leftTreeValid && rightTreeValid) {
        return true;
    } else {
        return false;
    }
}
