// Delete middle node
// Note: Not the optimal solution as it loops through the remaining nodes
module.exports = function deleteMiddle(toDelete) {
    var prev = null,
        node = toDelete;

    // Shift the values to the left
    while (node.next) {
        node.val = node.next.val;
        prev = node;
        node = node.next;
    }

    // Delete the reference from the previously next to last node
    prev.next = null;
};
