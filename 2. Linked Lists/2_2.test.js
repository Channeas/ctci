const createList = require("./createList");
const kthLast = require("./2_2");

test("1->2->3->4->5 | k = 2 should return 3->4->5", () => {
    const initialList = createList([1, 2, 3, 4, 5]),
        result = createList([3, 4, 5]);
    expect(kthLast(initialList, 2)).toStrictEqual(result);
});

test("1->2->3 | k = 2 should return 1->2->3", () => {
    const initialList = createList([1, 2, 3]),
        result = createList([1, 2, 3]);
    expect(kthLast(initialList, 2)).toStrictEqual(result);
});

test("1->2 | k = 0 should return 2", () => {
    const initialList = createList([1, 2]),
        result = createList([2]);
    expect(kthLast(initialList, 0)).toStrictEqual(result);
});

test("1->2 | k = 4 should return null", () => {
    const initialList = createList([1, 2]);
    expect(kthLast(initialList, 4)).toStrictEqual(null);
});
