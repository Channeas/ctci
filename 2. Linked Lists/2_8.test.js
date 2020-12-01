const createList = require("./createList");
const getLastNode = require("./getLastNode");
const isLoop = require("./2_8");

test("A->B->C->D->E->C is a loop, the loop begins with node C", () => {
    var start = createList(["A", "B", "C"]),
        end = createList(["D", "E"]);

    // Start the loop
    var loopStart = getLastNode(start);
    getLastNode(end).next = loopStart;

    // Join the lists
    start.join(end);

    // See if the function returned the node at the start of the loop
    expect(isLoop(start) === loopStart).toBe(true);
});

test("A->A is a loop, the loop begins with node A", () => {
    var node = createList(["A"]);

    // Start the loop
    node.next = node;

    // See if the function returned the node at the start of the loop
    expect(isLoop(node) === node).toBe(true);
});

test("A->B->C is not a loop", () => {
    var list = createList(["A", "B", "C"]);

    // See if the function returned the node at the start of the loop
    expect(isLoop(list)).toBe(false);
});
