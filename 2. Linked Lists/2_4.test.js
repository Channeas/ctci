const createList = require("./createList");
const partition = require("./2_4");
const sameList = require("./sameList");

test("1->4->3->2->2->5, x=3 should become 2->2->1->4->3->5", () => {
    var before = createList([1, 4, 3, 2, 2, 5]),
        expected = createList([2, 2, 1, 4, 3, 5]);
    partition(before, 3);

    expect(sameList(before, expected)).toBe(true);
});

// Due to this not being a "stable" approach, the values are moved
test("1->2->3, x=3 should become 2->1->3", () => {
    var before = createList([1, 2, 3]),
        expected = createList([2, 1, 3]);
    partition(before, 3);

    expect(sameList(before, expected)).toBe(true);
});
