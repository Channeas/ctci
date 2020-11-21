const { tsExternalModuleReference } = require("@babel/types");
const isUnique = require("./1_1");

test("'abc' is unique", () => {
    expect(isUnique("abc")).toBe(true);
});

test("'aba' is not unique", () => {
    expect(isUnique("aba")).toBe(false);
});
