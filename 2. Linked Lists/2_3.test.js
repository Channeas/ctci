const createList = require("./createList");
const deleteMiddle = require("./2_3");

test("1->2->3->4 | access = 2 should be 1->3->4", () => {
    var list = createList([1, 2, 3, 4]),
        expected = createList([1, 3, 4]);

    deleteMiddle(list.next);
    expect(list).toStrictEqual(expected);
});

test("1->2->3 | access = 2 should be 1->3", () => {
    var list = createList([1, 2, 3]),
        expected = createList([1, 3]);

    deleteMiddle(list.next);
    expect(list).toStrictEqual(expected);
});
