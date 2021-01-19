// Successor
export default function findNextNode(node) {
    // See if there is a right node to move to
    if (node.right) {
        // Find the leftmost node
        var current = node.right;
        while (current.left) {
            current = current.left;
        }

        return current;
    }

    // Otherwise look for the next parent to the right
    var parent = node.parent,
        current = node;
    while (parent && parent.right == current) {
        current = parent;
        parent = parent.parent;
    }

    return parent;
}
