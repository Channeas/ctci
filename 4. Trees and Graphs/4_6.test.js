import BinaryTree from "./BinaryTree.js";
import findNextNode from "./4_6.js";

// Testing a tree with only one node (IE no next node)
test("Tree with only one node (no next node", () => {
    var tree = new BinaryTree([1]);

    expect(findNextNode(tree)).toBe(null);
});

var generalTree = new BinaryTree([4, 2, 6, 1, 3, 5, 7]);

// Testing a node with no child nodes, that is it's parent's left node
test("Node with no child nodes, parent's left node", () => {
    var node = generalTree.left.left,
        next = generalTree.left;

    expect(findNextNode(node)).toBe(next);
});

// Testing a node with no child nodes, that is it's parent's right node
test("Node with no child nodes, parent's right node", () => {
    var node = generalTree.left.right;

    expect(findNextNode(node)).toBe(generalTree);
});

// Testing a node with two child nodes
test("Node with two child nodes", () => {
    var node = generalTree.left,
        next = node.right;

    expect(findNextNode(node)).toBe(next);
});

// Testing a node with a right, then a left child node
test("Node with a right, then left child node", () => {
    var node = generalTree,
        next = node.right.left;

    expect(findNextNode(node)).toBe(next);
});
