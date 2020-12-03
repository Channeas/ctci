const TripleStack = require("./3_1");

test("Testing stack 1", () => {
    let stack = new TripleStack();

    // Add some noise
    stack.s2Push(42);
    stack.s2Push(43);
    stack.s3Push(42);
    stack.s3Push(43);

    // Add to the first stack
    stack.s1Push(1);
    stack.s1Push(2);
    stack.s1Push(3);

    expect(stack.s1Peek()).toBe(3);
    expect(stack.s1Pop()).toBe(3);
    expect(stack.s1Pop()).toBe(2);

    // Some more noise
    stack.s2Pop();
    stack.s2Pop();
    stack.s2Pop();

    expect(stack.s1Pop()).toBe(1);
    expect(stack.s1Pop()).toBe(undefined);
});

test("Testing stack 2", () => {
    let stack = new TripleStack();

    // Add some noise
    stack.s1Push(41);
    stack.s1Push(42);
    stack.s1Push(43);
    stack.s3Push(42);
    stack.s3Push(43);

    // Add to the second stack
    stack.s2Push(1);
    stack.s2Push(2);
    stack.s2Push(3);

    expect(stack.s2Peek()).toBe(3);
    expect(stack.s2Pop()).toBe(3);
    expect(stack.s2Pop()).toBe(2);

    // Some more noise
    stack.s1Pop();
    stack.s1Pop();
    stack.s1Pop();
    stack.s1Push(400);
    stack.s3Pop();
    stack.s3Pop();
    stack.s3Pop();

    expect(stack.s2Pop()).toBe(1);
    expect(stack.s2Pop()).toBe(undefined);
});

test("Testing stack 3", () => {
    let stack = new TripleStack();

    // Add some noise
    stack.s1Push(41);
    stack.s1Push(42);
    stack.s1Push(43);
    stack.s2Push(42);
    stack.s2Push(43);

    // Add to the second stack
    stack.s3Push(1);
    stack.s3Push(2);
    stack.s3Push(3);

    expect(stack.s3Peek()).toBe(3);
    expect(stack.s3Pop()).toBe(3);
    expect(stack.s3Pop()).toBe(2);

    // Some more noise
    stack.s1Pop();
    stack.s1Pop();
    stack.s1Pop();
    stack.s1Push(400);
    stack.s2Pop();
    stack.s2Pop();
    stack.s2Pop();

    expect(stack.s3Pop()).toBe(1);
    expect(stack.s3Pop()).toBe(undefined);
    expect(stack.s3Peek()).toBe(undefined);
});
