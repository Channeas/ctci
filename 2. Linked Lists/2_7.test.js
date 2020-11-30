const createList = require("./createList");
const sameList = require("./sameList");
const intersection = require("./2_7");

test("1->2->3 has no intersecting nodes with 4->5->6", () => {
    var list1 = createList([1, 2, 3]),
        list2 = createList([4, 5, 6]);

    expect(intersection(list1, list2)).toBe(false);
});

test("1->2->3 has no intersecting nodes with a separate 1->2->3", () => {
    var list1 = createList([1, 2, 3]),
        list2 = createList([1, 2, 3]);

    expect(intersection(list1, list2)).toBe(false);
});

test("1->2->3->4 intersects with 3->4", () => {
    var list1 = createList([1, 2]),
        list2 = createList([3, 4]);

    list1.join(list2);

    var intersectingNode = intersection(list1, list2);
    expect(sameList(intersectingNode, list2)).toBe(true);
});

test("1->2->1->2->3->4 intersects with 3->4", () => {
    var list1 = createList([1, 2, 1, 2]),
        list2 = createList([3, 4]);

    list1.join(list2);

    var intersectingNode = intersection(list1, list2);
    expect(sameList(intersectingNode, list2)).toBe(true);
});
