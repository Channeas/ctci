const oneAway = require("./1_5");

test("'pale', 'ple' - one change away", () => {
    expect(oneAway("pale", "ple")).toBe(true);
});

test("'pales', 'pale' - one change away", () => {
    expect(oneAway("pales", "pale")).toBe(true);
});

test("'pale', 'bale' - one change away", () => {
    expect(oneAway("pale", "bale")).toBe(true);
});

test("'pale', 'bake' - two changes away", () => {
    expect(oneAway("pale", "bake")).toBe(false);
});

test("'pale', 'pe' - length difference", () => {
    expect(oneAway("pale", "pe")).toBe(false);
});

test("'ppaallee', 'palemate' - two changes away", () => {
    expect(oneAway("ppaallee", "palemate")).toBe(false);
});
