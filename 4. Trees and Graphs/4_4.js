// Check Balanced
export default function isBalancedTree(root) {
    return hasBalancedHeight(root) !== false;
}

// Method that checks if a subtree has a balanced height, and returns
// that height if true
function hasBalancedHeight(node) {
    // Make sure the node exists
    if (!node) {
        return 0;
    }

    // Get the heights of the child nodes
    const left = hasBalancedHeight(node.left),
        right = hasBalancedHeight(node.right);

    // Make sure both those trees were balanced
    if (left === false || right === false) {
        return false;
    }

    // Get the difference
    const difference = Math.abs(left - right);

    // See if they were balanced
    if (difference < 2) {
        return Math.max(left, right) + 1;
    } else {
        return false;
    }
}
