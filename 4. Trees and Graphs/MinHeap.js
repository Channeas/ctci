import HeapNode from "./HeapNode.js";

// Min heap
export default class MinHeap {
    constructor(values) {
        // Declare properties
        this._root = null;
        this._size = 0;

        // How many nodes there can be at the bottom row
        this._bottomCapacity = 1;

        // How many nodes there are at the bottom row
        this._bottomCount = 0;

        // Insert the starting nodes
        for (var value in values) {
            this.insert(value);
        }
    }

    // Method for inserting new values into the heap
    insert(value) {
        // See if this is the first node
        if (this._size == 0) {
            // If it is, insert the value as the root
            this._root = new HeapNode(value, null);
            this._incrementCount();
            return;
        }

        // Get the capacity of the bottom row
        var bottomCapacity = this._bottomCapacity;

        // Get how many nodes there are in the bottom row
        var bottomCount = this._bottomCount;

        var node = this._root,
            newNode = new HeapNode(value, null);
        while (true) {
            // See if we can place the new value
            if (!node.left) {
                node.left = newNode;
                newNode.parent = node;
                break;
            } else if (!node.right) {
                node.right = newNode;
                newNode.parent = node;
                break;
            }

            // Determine where to go (if the bottom left half is full, go right)
            if (bottomCount < bottomCapacity / 2) {
                // Go left
                node = node.left;
            } else {
                // Else go right
                node = node.right;
                bottomCount -= bottomCapacity / 2;
            }

            bottomCapacity /= 2;
        }

        // Increase the stored size of the heap
        this._incrementCount();

        // Bubble up the new value
        this._bubbleUp(newNode);
    }

    // Method for extracting the min value from the heap
    extractMin() {
        // Make sure there is at least one node
        if (this._size == 0) {
            return null;
        }

        // See if this is the last remaining node
        if (this._size == 1) {
            // If it is, make sure to clear the tree
            var val = this._root.val;
            this._root = null;
            this._decrementCount();
            return val;
        }

        // Store the minimum value
        var minVal = this._root.val;

        // Find the newest node
        var newestNode = this._getNewestNode();

        // Set the newest value as new top value
        this._root.val = newestNode.val;

        // Remove the newest node
        if (newestNode.parent.right) {
            newestNode.parent.right = null;
        } else {
            newestNode.parent.left = null;
        }

        // Bubble down the top value
        this._bubbleDown(this._root);

        // Return the stored minimum value
        this._decrementCount();
        return minVal;
    }

    // Internal method for bubbling up a value
    _bubbleUp(node) {
        // Make sure this is not the root node
        if (node.parent) {
            // Check if the parent is larger than the node
            if (node.val < node.parent.val) {
                // If so, swap the values
                var temp = node.val;
                node.val = node.parent.val;
                node.parent.val = temp;
                this._bubbleUp(node.parent);
            }
        }
    }

    // Internal method for bubbling down a value
    _bubbleDown(node) {
        // See if there is a right value, and if it is smaller than the left value
        if (
            node.right &&
            node.right.val < node.left.val &&
            node.right.val < node.val
        ) {
            // Swap the values
            var temp = node.val;
            node.val = node.right.val;
            node.right.val = temp;
            this._bubbleDown(node.right);
        } else if (node.left && node.left.val < node.val) {
            // Swap the values
            var temp = node.val;
            node.val = node.left.val;
            node.left.val = temp;
            this._bubbleDown(node.left);
        }
    }

    // Internal function for storing that a node has been added
    _incrementCount() {
        this._size++;
        this._bottomCount++;

        // Potentially move to a new layer
        if (this._bottomCount >= this._bottomCapacity) {
            this._bottomCapacity *= 2;
            this._bottomCount = 0;
        }
    }

    // Internal function for storing that a node has been extracted
    _decrementCount() {
        this._size--;

        // Potentially move to the previous layer
        if (this._bottomCount <= 0) {
            this._bottomCapacity /= 2;
            this._bottomCount = this._bottomCapacity - 1;
        } else {
            this._bottomCount--;
        }
    }

    // Internal method for retrieving the newest node
    _getNewestNode() {
        // Get the capacity of the bottom row
        var bottomCapacity = this._bottomCapacity;

        // Get how many nodes there are in the bottom row
        var bottomCount = this._bottomCount;

        var node = this._root;
        while (true) {
            // See if this is the bottom node
            if (!node.left) {
                return node;
            }

            // Handle situations when the bottom level is full
            if (bottomCount == 0) {
                node = node.right;
                continue;
            }

            // Determine where to go (if the bottom left half is full, go right)
            if (bottomCount <= bottomCapacity / 2) {
                // Go left
                node = node.left;
            } else {
                // Else go right
                node = node.right;
                bottomCount -= bottomCapacity / 2;
            }

            bottomCapacity /= 2;
        }
    }
}
