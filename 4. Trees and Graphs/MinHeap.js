import HeapNode from "./HeapNode.js";

// Min heap
export default class MinHeap {
    constructor(values) {
        // Declare properties
        this._root = null;
        this._size = 0;
        this._levels = 0;

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
            this._size++;
            return;
        }

        // Calculate how many levels there are
        var levels = this._calculateLevels(this._size);

        // Calculate the capacity of the bottom row
        var bottomCapacity = Math.pow(2, levels - 1);

        // Calculate how many nodes there actually are on the bottom row
        var bottomCount = this._calculateBottomCount(this._size);

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
        this._size++;

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
            this._size--;
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
        this._size--;
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

    // Internal method for calculating how many levels there are in the tree
    _calculateLevels(nodeCount) {
        var power = 0,
            val = 1;

        // Keep subtracting the increasing power of 2 until there are no nodes left
        while (nodeCount >= val) {
            val *= 2;
            power++;
        }

        return power;
    }

    // Internal method for calculating how many nodes there are on the bottom level
    _calculateBottomCount(nodeCount) {
        var left = nodeCount,
            levelCount = 1;

        // Remove the capacity at each level until there are no nodes left
        while (left >= 0) {
            left -= levelCount;
            levelCount *= 2;
        }

        // Then return the previous value
        return levelCount / 2 + left;
    }

    // Internal method for retrieving the newest node
    _getNewestNode() {
        // Calculate how many levels there are
        var levels = this._calculateLevels(this._size);

        // Calculate the capacity of the bottom row
        var bottomCapacity = Math.pow(2, levels - 1);

        // Calculate how many nodes there actually are on the bottom row
        var bottomCount = this._calculateBottomCount(this._size);

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
