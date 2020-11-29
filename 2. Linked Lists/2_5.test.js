const createList = require("./createList");
const sameList = require("./sameList");
const sumLists = require("./2_5");

test("1->2->3 and 1->2 should be 2->4->3", () => {
    var l1 = createList([1, 2, 3]),
        l2 = createList([1, 2]),
        result = createList([2, 4, 3]);

    var sum = sumLists(l1, l2);

    expect(sameList(sum, result)).toBe(true);
});

test("1->2 and 9->9->9->9 should be 0->2->0->0->1", () => {
    var l1 = createList([1, 2]),
        l2 = createList([9, 9, 9, 9]),
        result = createList([0, 2, 0, 0, 1]);

    var sum = sumLists(l1, l2);

    expect(sameList(sum, result)).toBe(true);
});

test("1->2->3 and 1->2->3 should be 2->4->6", () => {
    var l1 = createList([1, 2, 3]),
        l2 = createList([1, 2, 3]),
        result = createList([2, 4, 6]);

    var sum = sumLists(l1, l2);

    expect(sameList(sum, result)).toBe(true);
});
