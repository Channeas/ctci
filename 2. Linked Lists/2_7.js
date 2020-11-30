// Intersection
module.exports = function intersects(head1, head2) {
    // Add the nodes of the first list to a hash table
    const nodes = new Map();
    var node1 = head1;
    while (node1) {
        // Check if a node with the same value is already in the hash table
        if (nodes.has(node1.val)) {
            // If there is, add this node to the array
            nodes.get(node1.val).push(node1);
        } else {
            // Else add an array for the current val
            nodes.set(node1.val, [node1]);
        }

        node1 = node1.next;
    }

    // Check the second list for intersections
    var node2 = head2;
    while (node2) {
        // Check for nodes with the same value in the hash table
        if (nodes.has(node2.val)) {
            // If there are any, loop through them
            for (var node of nodes.get(node2.val)) {
                // Check if they are the same
                if (node === node2) {
                    return node;
                }
            }
        }

        node2 = node2.next;
    }

    return false;
};
