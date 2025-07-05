const add = require('./stringCalculator');

test("return 0 for empty string", () => {
    expect(add("")).toBe(0);
})