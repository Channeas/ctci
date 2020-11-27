// Function for comparing if two linked lists are the same
module.exports = function sameList(head1, head2) {
    var node1 = head1,
        node2 = head2;
    // Loop through the lists
    while (node1 && node2) {
        // Check that both nodes have the same value
        if (node1.val == node2.val) {
            // Move forward
            node1 = node1.next;
            node2 = node2.next;
        } else {
            return false;
        }
    }

    // Make sure both lists have ended
    return node1 == node2;
};
