import createBuildOrder from "./4_7.js";

// Test with only one project
test("Only one project", () => {
    let projects = ["a"],
        dependencies = [];
    expect(createBuildOrder(projects, dependencies)).toStrictEqual(["a"]);
});

// Test with two projects
test("Two projects, one dependency", () => {
    let projects = ["a", "b"],
        dependencies = [["a", "b"]];
    expect(createBuildOrder(projects, dependencies)).toStrictEqual(["a", "b"]);
});

// Test with two interdependent projects
test("Two interdependent projects", () => {
    let projects = ["a", "b"],
        dependencies = [
            ["a", "b"],
            ["b", "a"],
        ];
    expect(createBuildOrder(projects, dependencies)).toStrictEqual(false);
});

// Test with many projects and dependencies
test("Many projects and dependencies", () => {
    let projects = ["a", "b", "c", "d", "e", "f"],
        dependencies = [
            ["a", "d"],
            ["f", "b"],
            ["b", "d"],
            ["f", "a"],
            ["d", "c"],
        ];
    expect(createBuildOrder(projects, dependencies)).toStrictEqual([
        "e",
        "f",
        "b",
        "a",
        "d",
        "c",
    ]);
});

// Test with many projects and dependencies
test("Many projects and dependencies, with a dependency loop", () => {
    let projects = ["a", "b", "c", "d", "e", "f"],
        dependencies = [
            ["a", "d"],
            ["d", "b"],
            ["d", "c"],
            ["d", "e"],
            ["b", "e"],
            ["f", "b"],
            ["e", "f"],
        ];
    expect(createBuildOrder(projects, dependencies)).toStrictEqual(false);
});

// Test with many projects and dependencies
test("Many projects and dependencies, with different groups", () => {
    let projects = ["a", "b", "c", "d", "e", "f", "g", "h", "i"],
        dependencies = [
            ["a", "d"],
            ["f", "b"],
            ["b", "d"],
            ["f", "a"],
            ["d", "c"],
            ["g", "h"],
            ["h", "i"],
        ];
    expect(createBuildOrder(projects, dependencies)).toStrictEqual([
        "e",
        "f",
        "g",
        "b",
        "a",
        "h",
        "d",
        "i",
        "c",
    ]);
});
