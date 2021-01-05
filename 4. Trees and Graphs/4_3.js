// List of Depths
export function toLinkedLists(root) {
    // Make sure the tree is not empty
    if (!root) {
        return [];
    }

    // Array for storing the linked lists
    const lists = [];

    // Queues for storing the node
    var currentLevel = [root],
        nextLevel = [];

    // Head and tail of the current linked list
    var head = null,
        tail = null;

    // BFS traverse the tree
    while (currentLevel.length) {
        // Get the current node
        var node = currentLevel.shift();

        // Create a new linked list node
        var listNode = new LLNode(node.val);

        // Add the node to a linked list
        if (!head) {
            head = listNode;
            tail = listNode;
        } else {
            tail.next = listNode;
            tail = listNode;
        }

        // Add children
        if (node.left) {
            nextLevel.push(node.left);
        }
        if (node.right) {
            nextLevel.push(node.right);
        }

        // Potentially move to the next level
        if (currentLevel.length == 0) {
            currentLevel = nextLevel;
            nextLevel = [];

            // Reset the linked list
            lists.push(head);
            head = null;
            tail = null;
        }
    }

    return lists;
}

export class LLNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
