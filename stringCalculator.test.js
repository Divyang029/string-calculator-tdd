const add = require('./stringCalculator');

test("return 0 for empty string", () => {
    expect(add("")).toBe(0);
});

test("returns number if only one number is provided", () => {
    expect(add("1")).toBe(1);
});