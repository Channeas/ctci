const createList = require("./createList");
const isPalindrome = require("./2_6");

test("a->b->a is a palindrome", () => {
    expect(isPalindrome(createList(["a", "b", "a"]))).toBe(true);
});

test("a->b->c is not a palindrome", () => {
    expect(isPalindrome(createList(["a", "b", "c"]))).toBe(false);
});

test("a is a palindrome", () => {
    expect(isPalindrome(createList(["a"]))).toBe(true);
});

test(" is a palindrome", () => {
    expect(isPalindrome(createList([]))).toBe(true);
});
