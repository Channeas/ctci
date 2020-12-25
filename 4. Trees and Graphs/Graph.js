import GraphNode from "./GraphNode.js";

// Graph holding class
export default class Graph {
    constructor(type = "directed") {
        this._nodes = [];

        // Make sure a valid graph type was passed (directed or undirected)
        if (type == "directed" || type == "undirected") {
            this._type = type;
        } else {
            throw "Unknown graph type. Must be eithed directed or undirected";
        }
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

            // Potentially remove edges pointing to this node
            if (this._type == "directed") {
                // Loop through all the other nodes
                for (var source of this._nodes) {
                    if (source.edges.includes(node)) {
                        this.removeEdge(source, node);
                    }
                }
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

            // Potentially add an undirected edge
            if (this._type == "undirected") {
                node2.addEdge(node1);
            }

            return true;
        }

        return false;
    }

    // Method for removing edges
    removeEdge(node1, node2) {
        // Make sure both nodes exist
        if (this._nodes.includes(node1) && this._nodes.includes(node2)) {
            node1.removeEdge(node2);

            // Potentially remove an undirected edge
            if (this._type == "undirected") {
                node2.removeEdge(node1);
            }

            return true;
        }

        return false;
    }
}
