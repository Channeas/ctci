const isPermutation = require("./1_2");

test("'abc' is a permutation of 'cba'", () => {
    expect(isPermutation("abc", "cba")).toBe(true);
});

test("'abc' is not a permutation of 'abd'", () => {
    expect(isPermutation("abc", "abd")).toBe(false);
});

test("'ab' is not a permutation of 'abc'", () => {
    expect(isPermutation("ab", "abc")).toBe(false);
});
