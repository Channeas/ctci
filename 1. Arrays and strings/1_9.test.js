const isRotation = require("./1_9");

test("'leapp' is a rotation of 'apple'", () => {
    expect(isRotation("apple", "leapp")).toBe(true);
});

test("'YESsheshkfdskhfksdhfk' is a rotation of 'skhfksdhfkYESsheshkfd'", () => {
    expect(isRotation("skhfksdhfkYESsheshkfd", "YESsheshkfdskhfksdhfk")).toBe(
        true
    );
});

test("'no' is not a rotation of 'yes'", () => {
    expect(isRotation("yes", "no")).toBe(false);
});

test("'llapp' is not a rotation of 'apple'", () => {
    expect(isRotation("apple", "llapp")).toBe(false);
});
