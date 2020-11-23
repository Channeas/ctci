// Function that creates a linked list from an array of values
const LLNode = require("./LLNode");

module.exports = function createList(values) {
    // Create the head node
    const head = new LLNode(values[0]);

    // Loop through the remaining values, creating them as lists
    var node = head;
    for (var index = 1; index < values.length; index++) {
        var newNode = new LLNode(values[index]);
        node.next = newNode;
        node = newNode;
    }

    return head;
};
