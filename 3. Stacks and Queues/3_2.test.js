const StackMin = require("./3_2");

test("Testing empty stack", () => {
    let stack = new StackMin();
    expect(stack.pop()).toBe(null);
    expect(stack.min()).toBe(null);
});

test("Testing 2, 3, 4, 1, 5, 2, 0, 7 stack", () => {
    let stack = new StackMin();

    stack.push(2);
    stack.push(3);
    stack.push(4);

    expect(stack.min()).toBe(2);
    expect(stack.pop()).toBe(4);

    stack.push(1);
    stack.push(5);
    stack.push(2);

    expect(stack.min()).toBe(1);
    expect(stack.pop()).toBe(2);

    stack.push(0);

    expect(stack.min()).toBe(0);
    expect(stack.pop()).toBe(0);
    expect(stack.min()).toBe(1);
});

test("Testing multiple of the same minimum element", () => {
    let stack = new StackMin();

    stack.push(1);
    stack.push(1);
    stack.push(1);
    stack.push(0);

    expect(stack.min()).toBe(0);
    expect(stack.pop()).toBe(0);
    expect(stack.min()).toBe(1);
    expect(stack.pop()).toBe(1);
    expect(stack.min()).toBe(1); // Make sure that min is not null
});
