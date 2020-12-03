const SetOfStacks = require("./3_3"),
    stackCapacity = 50;

test("Creating four stacks", () => {
    let set = new SetOfStacks();

    // Create 4 stacks
    for (var index = 0; index < stackCapacity * 4; index++) {
        set.push(index);
    }

    expect(set._stacks.length).toBe(4);
});

test("Creating four stacks, then removing three", () => {
    let set = new SetOfStacks();

    // Create 4 stacks
    for (var index = 0; index < stackCapacity * 4; index++) {
        set.push(index);
    }

    // Remove 3 stacks
    for (var index = 0; index < stackCapacity * 3; index++) {
        set.pop();
    }

    expect(set._stacks.length).toBe(1);
});

test("Creating one stack, then removing two", () => {
    let set = new SetOfStacks();

    // Create one stack
    for (var index = 0; index < stackCapacity; index++) {
        set.push(index);
    }

    // Remove one stack (looking for undefined errors)
    for (var index = 0; index < stackCapacity * 2; index++) {
        set.pop();
    }

    expect(set._stacks.length).toBe(0);
});

test("Creating three stacks, then removing half of the middle one", () => {
    let set = new SetOfStacks();

    // Create 3 stacks
    for (var index = 0; index < stackCapacity * 3; index++) {
        set.push(index);
    }

    // Remove half of the middle stack
    for (var index = 0; index < stackCapacity / 2; index++) {
        set.popAt(1);
    }

    expect(set._stacks[1].size).toBe(25);
});

test("Creating four stacks, then removing half of the first (bottom) one", () => {
    let set = new SetOfStacks();

    // Create 4 stacks
    for (var index = 0; index < stackCapacity * 4; index++) {
        set.push(index);
    }

    // Remove half of the first (oldest, bottom) stack
    for (var index = 0; index < stackCapacity / 2; index++) {
        set.popAt(0);
    }

    expect(set._stacks[3].size).toBe(25);
});
