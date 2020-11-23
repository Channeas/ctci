// Remove Dups - remove duplicate values from a linked list
module.exports = function removeDups(head) {
    const hash = new Map();
    var node = head,
        prev = null;

    // Loop through the linked list
    while (node != null) {
        // See if the node's value already exists in the hash map
        if (hash.has(node.val)) {
            // If it does, remove the node
            prev.next = node.next;
        } else {
            // Else add the value to the hash
            hash.set(node.val, true);
            prev = node;
        }

        // Move on to the next node
        node = node.next;
    }

    return head;
};
