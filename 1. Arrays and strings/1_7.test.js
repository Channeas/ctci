const rotate = require("./1_7");

test("Rotate [[1]]", () => {
    expect(rotate([[1]])).toStrictEqual([[1]]);
});

test("Rotate [[1,2], [3,4]]", () => {
    expect(
        rotate([
            [1, 2],
            [3, 4],
        ])
    ).toStrictEqual([
        [3, 1],
        [4, 2],
    ]);
});

test("Rotate [[1, 2, 3], [4, 5, 6],[7, 8, 9]]", () => {
    expect(
        rotate([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ])
    ).toStrictEqual([
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3],
    ]);
});
