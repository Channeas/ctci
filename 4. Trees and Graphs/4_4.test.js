import BinaryTree from "./BinaryTree.js";
import isBalancedTree from "./4_4.js";

// Not a tree
test("Empty tree", () => {
    expect(isBalancedTree()).toBe(true);
});

// A tree with only the root
test("A tree with only the root", () => {
    const tree = new BinaryTree([1]);

    expect(isBalancedTree(tree)).toBe(true);
});

// A tree with two nodes
test("A tree with two nodes", () => {
    const tree = new BinaryTree([1, 2]);

    expect(isBalancedTree(tree)).toBe(true);
});

// A tree with three even nodes (complete tree)
test("A tree with 3 even nodes", () => {
    const tree = new BinaryTree([1, 2, 3]);

    expect(isBalancedTree(tree)).toBe(true);
});

// A tree with three full levels
test("A tree with three full levels", () => {
    const tree = new BinaryTree([1, 2, 3, 4, 5, 6, 8]);

    expect(isBalancedTree(tree)).toBe(true);
});

// A tree with three left nodes
test("A tree with 3 left nodes", () => {
    const tree = new BinaryTree([1, 2, null, 4]);

    expect(isBalancedTree(tree)).toBe(false);
});
