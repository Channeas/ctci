// Loop Detection
module.exports = function isLoop(head) {
    const visitedNodes = new Map();
    var node = head;

    // Iterate through the list
    while (node) {
        // See if the node has already been visited (indicating a loop)
        if (visitedNodes.has(node)) {
            return node;
        }

        // If it hasn't, set this node as visited
        visitedNodes.set(node, true);

        // Move on to the next node
        node = node.next;
    }

    return false;
};
