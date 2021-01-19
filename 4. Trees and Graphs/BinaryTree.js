// Implementation of a binary tree that creates nodes from an array
import BTNode from "./BTNode.js";
export default class BinaryTree extends BTNode {
    constructor(nodes) {
        // Make sure there are nodes
        if (!nodes || nodes.length == 0) {
            super(null, null);
            return;
        }

        // Create the first node
        super(nodes.shift(), null);

        // Create the child nodes
        const nodeStack = [this];
        while (nodes.length) {
            // Get the current node
            var node = nodeStack.shift();

            // Get the child values
            var leftVal = nodes.shift(),
                rightVal = nodes.shift();

            // Add the left child node (if it exists)
            if (leftVal) {
                node.left = new BTNode(leftVal, node);
                nodeStack.push(node.left);
            }

            // Add the right child node (if it exists)
            if (rightVal) {
                node.right = new BTNode(rightVal, node);
                nodeStack.push(node.right);
            }
        }
    }
}
