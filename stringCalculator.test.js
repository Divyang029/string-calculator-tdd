const add = require('./stringCalculator');

test("return 0 for empty string", () => {
    expect(add("")).toBe(0);
});

test("returns number if only one number is provided", () => {
    expect(add("1")).toBe(1);
});

test("add comma-separated two numbers", () => {
  expect(add("1,3")).toBe(4);
});

test("adds multiple numbers", () => {
  expect(add("1,2,3,4")).toBe(10);
});