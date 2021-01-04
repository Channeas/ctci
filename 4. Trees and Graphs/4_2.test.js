import createMinimalBST from "./4_2.js";

// Trying an empty tree
test("Creating a tree with no nodes", () => {
    expect(createMinimalBST([])).toBe(null);
});

// Trying a tree with only the root node
test("Creating a tree with only one node", () => {
    // Create the trees (one using the new function and one using an old class)
    const tree = createMinimalBST([1]);

    expect(tree.val).toBe(1);
    expect(tree.left).toBe(null);
    expect(tree.right).toBe(null);
});

// Trying a tree with an even amount of nodes
test("Creating a tree with an even amount of nodes", () => {
    // Create the trees (one using the new function and one using an old class)
    const tree = createMinimalBST([1, 2, 3, 4]);
    expect(tree.val).toBe(3);
    expect(tree.left.val).toBe(2);
    expect(tree.right.val).toBe(4);
    expect(tree.left.left.val).toBe(1);
    expect(tree.left.right).toBe(null);
    expect(tree.right.left).toBe(null);
    expect(tree.right.right).toBe(null);
});

// Trying a tree with an uneven amount of nodes
test("Creating a tree with an uneven amount of nodes", () => {
    // Create the trees (one using the new function and one using an old class)
    const tree = createMinimalBST([1, 2, 3, 4, 5]);
    expect(tree.val).toBe(3);
    expect(tree.left.val).toBe(2);
    expect(tree.right.val).toBe(5);
    expect(tree.left.left.val).toBe(1);
    expect(tree.left.right).toBe(null);
    expect(tree.right.left.val).toBe(4);
    expect(tree.right.right).toBe(null);
});
