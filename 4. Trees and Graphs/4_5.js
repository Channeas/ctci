// Validate BST
export default function validBST(node, min = null, max = null) {
    // Check that the node exists
    if (!node) {
        return true;
    }

    // Make sure that the current node is larger than the min value but smaller than or equal to the max value
    if ((min != null && node.val <= min) || (max != null && node.val > max)) {
        // If not, return false
        return false;
    }

    // Check the subtrees
    const leftTreeValid = validBST(node.left, min, node.val),
        rightTreeValid = validBST(node.right, node.val, max);

    if (leftTreeValid && rightTreeValid) {
        return true;
    } else {
        return false;
    }
}
