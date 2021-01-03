import isConnected from "./4_1.js";
import Graph from "./Graph.js";

// Create a graph for testing
const graph = new Graph();
const nodes = [];

// Add the nodes
nodes.push(graph.addNode(0));
nodes.push(graph.addNode(1));
nodes.push(graph.addNode(2));
nodes.push(graph.addNode(3));
nodes.push(graph.addNode(4));
nodes.push(graph.addNode(5));
nodes.push(graph.addNode(6));

// Create a cluster
graph.addEdge(nodes[0], nodes[1]);
graph.addEdge(nodes[1], nodes[2]);
graph.addEdge(nodes[2], nodes[0]);
graph.addEdge(nodes[2], nodes[3]);
graph.addEdge(nodes[3], nodes[2]);

// Create another, unconnected cluster
graph.addEdge(nodes[4], nodes[6]);
graph.addEdge(nodes[5], nodes[4]);
graph.addEdge(nodes[6], nodes[5]);

// Look for a connection in the first cluster
test("Seeing if node 0 and 3 are connected (they are)", () => {
    expect(isConnected(graph, nodes[0], nodes[3])).toBe(true);
});

// Look for a connection between the clusters
test("Seeing if node 0 and 5 are connected (they are not)", () => {
    expect(isConnected(graph, nodes[0], nodes[5])).toBe(false);
});

// Look for a connection in the first cluster
test("Seeing if node 0 is connected to itself", () => {
    expect(isConnected(graph, nodes[0], nodes[0])).toBe(true);
});
