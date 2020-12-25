import GraphNode from "./GraphNode.js";

// Graph holding class
export default class Graph {
    constructor() {
        this._nodes = [];
    }

    // Method for adding new nodes
    addNode(value) {
        // Create a new node
        var newNode = new GraphNode(value);

        // Add the node to the list of nodes
        this._nodes.push(newNode);

        // Return the new node
        return newNode;
    }

    // Method for removing nodes
    removeNode(node) {
        // Make sure the node exists
        var index = this._nodes.indexOf(node);
        if (index >= 0) {
            // If it does, remove all the edges
            while (node.edges.length > 0) {
                this.removeEdge(node, node.edges[0]);
            }

            // Then remove the node
            this._nodes.splice(index, 1);
        }
    }

    // Method for adding edges
    addEdge(node1, node2) {
        // Make sure both nodes exist in the graph
        if (this._nodes.includes(node1) && this._nodes.includes(node2)) {
            // If they do, add the edge
            node1.addEdge(node2);
            node2.addEdge(node1);

            return true;
        }

        return false;
    }

    // Method for removing edges
    removeEdge(node1, node2) {
        // Make sure both nodes exist
        if (this._nodes.includes(node1) && this._nodes.includes(node2)) {
            node1.removeEdge(node2);
            node2.removeEdge(node1);

            return true;
        }

        return false;
    }
}
