// Partition a linked list around x
module.exports = function partition(head, x) {
    var node = head.next;

    // Loop through the linked list
    while (node) {
        // Check if the current value is smaller than x
        if (node.val < x) {
            // If it is, move the node to the start of the list
            insertNode(node, head);
            removeNode(node);
        } else {
            node = node.next;
        }
    }
};

function insertNode(node, location) {
    // Move the location to the right
    location.next = { val: location.val, next: location.next };

    // Insert the node
    location.val = node.val;
}

function removeNode(node) {
    node.val = node.next.val;
    node.next = node.next.next;
}
