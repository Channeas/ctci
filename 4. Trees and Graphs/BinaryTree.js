// Implementation of a binary tree that creates nodes from an array
import BTNode from "./BTNode.js";
export default class BinaryTree extends BTNode {
    constructor(nodes) {
        // Make sure there are nodes
        if (!nodes) {
            super(null);
            return;
        }

        // Create the first node
        if (nodes.length) {
            super(nodes.shift());
        }

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
                node.left = new BTNode(leftVal);
                nodeStack.push(node.left);
            }

            // Add the right child node (if it exists)
            if (rightVal) {
                node.right = new BTNode(rightVal);
                nodeStack.push(node.right);
            }
        }
    }
}
