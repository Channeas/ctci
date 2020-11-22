const functions = require("./1_3");

const testCase = "Hello World  ";

test("Case 1 function 1", () => {
    expect(functions.URLify1(testCase)).toBe("Hello%20World");
});

test("Case 1 function 2", () => {
    expect(functions.URLify2(testCase)).toBe("Hello%20World");
});
