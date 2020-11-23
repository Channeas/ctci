const zeroMatrix = require("./1_8");

test("Empty matrix", () => {
    expect(zeroMatrix([[]])).toStrictEqual([[]]);
});

test("Matrix with one 1", () => {
    expect(zeroMatrix([[1]])).toStrictEqual([[1]]);
});

test("Matrix with one 0", () => {
    expect(zeroMatrix([[0]])).toStrictEqual([[0]]);
});

test("Single row matrix", () => {
    expect(zeroMatrix([[1, 1, 1, 1, 0]])).toStrictEqual([[0, 0, 0, 0, 0]]);
});

test("Single column matrix", () => {
    expect(zeroMatrix([[0], [1], [1], [1]])).toStrictEqual([
        [0],
        [0],
        [0],
        [0],
    ]);
});

test("Complex matrix", () => {
    expect(
        zeroMatrix([
            [1, 1, 1, 1],
            [1, 0, 1, 1],
            [1, 1, 1, 1],
        ])
    ).toStrictEqual([
        [1, 0, 1, 1],
        [0, 0, 0, 0],
        [1, 0, 1, 1],
    ]);
});
