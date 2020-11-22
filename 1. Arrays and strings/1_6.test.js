const compress = require("./1_6");

test("'aaabb' should turn into 'a3b2'", () => {
    expect(compress("aaabb")).toBe("a3b2");
});

test("'eee' should turn into 'e3'", () => {
    expect(compress("eee")).toBe("e3");
});

test("'aabcccccaaa' should turn into 'a2b1c5a3'", () => {
    expect(compress("aabcccccaaa")).toBe("a2b1c5a3");
});

test("'a' should stay as 'a'", () => {
    expect(compress("a")).toBe("a");
});

test("'aab' should stay as 'aab'", () => {
    expect(compress("aab")).toBe("aab");
});
