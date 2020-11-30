const getLastNode = require("./getLastNode");

// Node to be used in a linked list
module.exports = class LLNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }

    // Function for joining another list onto this one
    join(head) {
        // Find the last node in this list
        var lastNode = getLastNode(this);

        // Join the lists
        lastNode.next = head;
    }
};
