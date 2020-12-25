// Graph node class - implemented using an adjecency list (called edges)
export default class GraphNode {
    constructor(value = null) {
        this.edges = [];

        // Store the value
        this.value = value;
    }

    // Method for adding an edge
    addEdge(node) {
        // Make sure the edge is not a duplicate
        if (!this.edges.includes(node)) {
            this.edges.push(node);
        }
    }

    // Method for removing an edge
    removeEdge(node) {
        // Get the index of the potentially connected node
        var index = this.edges.indexOf(node);

        // See if it exists
        if (index >= 0) {
            // If it does, remove it
            this.edges.splice(index, 1);

            return true;
        }

        return null;
    }
}
