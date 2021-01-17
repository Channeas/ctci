import BinaryTree from "./BinaryTree.js";
import validBST from "./4_5.js";

// Testing a tree with no nodes (satisfies the condition that node.left.val <= node.val < node.right.val for all nodes)
test("Empty tree", () => {
    const tree = new BinaryTree();

    expect(validBST(tree)).toBe(true);
});

// Testing a tree with a single node
test("Tree with a single node", () => {
    const tree = new BinaryTree([1]);

    expect(validBST(tree)).toBe(true);
});

// Testing a valid tree with 3 nodes
test("Valid tree with 3 nodes", () => {
    const tree = new BinaryTree([2, 1, 3]);

    expect(validBST(tree)).toBe(true);
});

// Testing an invalid tree with 3 nodes
test("Invalid tree with 3 nodes", () => {
    const tree = new BinaryTree([1, 2, 3]);

    expect(validBST(tree)).toBe(false);
});

// Testing a valid tree with 5 nodes
test("Valid tree with 5 nodes", () => {
    const tree = new BinaryTree([4, 2, 5, 1, 3]);

    expect(validBST(tree)).toBe(true);
});

// Testing an invalid tree with 5 nodes
test("Valid tree with 5 nodes", () => {
    const tree = new BinaryTree([4, 2, 5, 3, 1]);

    expect(validBST(tree)).toBe(false);
});

// Testing a valid tree with 7 nodes
test("Valid tree with 7 nodes", () => {
    const tree = new BinaryTree([4, 2, 6, 1, 3, 5, 7]);

    expect(validBST(tree)).toBe(true);
});

// Testing an invalid tree with 7 nodes
test("Valid tree with 7 nodes", () => {
    const tree = new BinaryTree([4, 2, 6, 3, 1, 5, 4]);

    expect(validBST(tree)).toBe(false);
});

// Testing an invalid tree with 7 nodes
test("Invalid tree with nested errors", () => {
    const tree = new BinaryTree([20, 15, 30, null, 25]);

    expect(validBST(tree)).toBe(false);
});
