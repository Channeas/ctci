import { toLinkedLists } from "./4_3.js";
import { LLNode } from "./4_3.js";
import BinaryTree from "./BinaryTree.js";

// Testing an empty tree
test("Empty tree", () => {
    expect(toLinkedLists(null)).toStrictEqual([]);
});

// Testing a tree with only one node
test("1 level tree", () => {
    // Create the tree that will be turned into a linked list
    let tree = new BinaryTree([1]);

    // Create the expected result
    let expectedResult = [new LLNode(1)];

    expect(toLinkedLists(tree)).toStrictEqual(expectedResult);
});

// Testing a complete tree with three levels
test("Complete 3 level tree", () => {
    // Create the tree that will be turned into a linked list
    let tree = new BinaryTree([1, 2, 3, 4, 5, 6, 7]);

    // Create the expected result
    let expectedResult = [
        new LLNode(1),
        createList([2, 3]),
        createList([4, 5, 6, 7]),
    ];

    expect(toLinkedLists(tree)).toStrictEqual(expectedResult);
});

// Testing a tree with holes in it
test("3 level tree with holes", () => {
    // Create the tree that will be turned into a linked list
    let tree = new BinaryTree([1, null, 2, 3, 4]);

    // Create the expected result
    let expectedResult = [new LLNode(1), new LLNode(2), createList([3, 4])];

    expect(toLinkedLists(tree)).toStrictEqual(expectedResult);
});

// Support function for creating a linked list from an array (I'm lazy)
function createList(values) {
    // Make sure there is at least one node in the list
    if (values.length == 0) {
        return null;
    }

    // Create the head node
    var head = new LLNode(values[0]);

    // Create the tail
    var tail = head;

    // Loop through the values, adding them to the linked list
    for (var index = 1; index < values.length; index++) {
        var node = new LLNode(values[index]);
        tail.next = node;
        tail = node;
    }

    return head;
}
