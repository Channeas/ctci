const palindromePermutation = require("./1_4");

test("'tact Coa' is a palindrome permutation", () => {
    expect(palindromePermutation("tact Coa")).toBe(true);
});

test("'no' is not a palindrome permutation", () => {
    expect(palindromePermutation("no")).toBe(false);
});

test("'a*B_,.,==0a' is a palindrome permutation", () => {
    expect(palindromePermutation("a*B_,.,==0a")).toBe(true);
});
