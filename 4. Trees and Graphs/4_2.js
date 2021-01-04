// Minimal Tree
export default function createMinimalBST(numbers) {
    // Make sure there are numbers left
    if (numbers.length == 0) {
        return null;
    }

    // Get the value in the middle
    const midVal = numbers.splice(numbers.length / 2, 1)[0];

    // Create a new node
    const newNode = new BTReeNode(midVal);

    // Create the left subtree
    newNode.left = createMinimalBST(
        numbers.slice(0, Math.ceil(numbers.length / 2))
    );

    // Create the right subtree
    newNode.right = createMinimalBST(
        numbers.slice(Math.ceil(numbers.length / 2))
    );

    // Return the node
    return newNode;
}

class BTReeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
