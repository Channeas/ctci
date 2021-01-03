// Route Between Nodes
export default function isConnected(graph, S, E) {
    const queue = [S];
    const visitedNodes = new Map();

    // Look for the E node
    while (queue.length) {
        // Get the next node
        let node = queue.shift();

        // Check if this node has been visited already
        if (visitedNodes.has(node)) {
            continue;
        }

        // See if this is the end node
        if (node == E) {
            // If it is, return that a route was found
            return true;
        }

        // Otherwise, add the node's edges to the queue
        for (var edge of node.edges) {
            queue.push(edge);
        }

        // Add the node to the hash table of visited nodes
        visitedNodes.set(node, true);
    }

    // If the function hasn't exited, return that there was no connection
    return false;
}
