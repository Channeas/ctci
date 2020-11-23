const createList = require("./createList");
const removeDups = require("./2_1");

test("1->1->2 should become 1->2", () => {
    const initialList = createList([1, 1, 2]),
        result = createList([1, 2]);
    expect(removeDups(initialList)).toStrictEqual(result);
});

test("1->1->1 should become 1", () => {
    const initialList = createList([1, 1, 1]),
        result = createList([1]);
    expect(removeDups(initialList)).toStrictEqual(result);
});

test("1->2->3->1->2->3 should become 1->2->3", () => {
    const initialList = createList([1, 2, 3, 1, 2, 3]),
        result = createList([1, 2, 3]);
    expect(removeDups(initialList)).toStrictEqual(result);
});

test("1->2 should remain 1->2", () => {
    const initialList = createList([1, 2]),
        result = createList([1, 2]);
    expect(removeDups(initialList)).toStrictEqual(result);
});

test("1 should remain 1", () => {
    const initialList = createList([1]),
        result = createList([1]);
    expect(removeDups(initialList)).toStrictEqual(result);
});
