const createStack = require("./createStack");
const sameStack = require("./sameStack");
const sortStack = require("./3_5");

// Empty stack test
test("Trying to sort an empty stack", () => {
    let stack1 = createStack([]),
        stack2 = createStack([]);

    // Sort the first empty stack
    sortStack(stack1);

    // Check if both stacks are still empty
    expect(sameStack(stack1, stack2)).toBe(true);
});

// Regular stack test
test("Trying to sort a reqular stack", () => {
    let stack = createStack([3, 0, 1, 2]),
        correct = createStack([3, 2, 1, 0]);

    // Sort the unsorted stack
    sortStack(stack);

    expect(sameStack(stack, correct)).toBe(true);
});

// Stack with negative numbers test
test("Trying to sort a stack with negative numbers", () => {
    let stack = createStack([3, 0, -1, 2]),
        correct = createStack([3, 2, 0, -1]);

    // Sort the stack
    sortStack(stack);

    expect(sameStack(stack, correct)).toBe(true);
});
