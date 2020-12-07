const MyQueue = require("./3_4");

test("Testing remove on empty queue", () => {
    let queue = new MyQueue();

    expect(queue.remove()).toBe(null);
});

test("Testing peek on empty queue", () => {
    let queue = new MyQueue();

    expect(queue.peek()).toBe(null);
});

test("Testing multiple adds", () => {
    let queue = new MyQueue();

    // Add items to the queue
    queue.add(1);
    queue.add(2);
    queue.add(3);

    // Check that 1 is on top
    expect(queue.peek()).toBe(1);
});

test("Testing multiple adds and removes", () => {
    let queue = new MyQueue();

    // Add items to the queue
    queue.add(1);
    queue.add(2);
    queue.add(3);

    // Remove items
    expect(queue.remove()).toBe(1);
    expect(queue.remove()).toBe(2);
    expect(queue.remove()).toBe(3);

    // Make sure the queue is empty
    expect(queue.peek()).toBe(null);
    expect(queue.remove()).toBe(null);

    // Try to add an element to the now empty queue
    queue.add(4);

    // Make sure the add was successful
    expect(queue.peek()).toBe(4);
});
