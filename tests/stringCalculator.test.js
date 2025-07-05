const add = require('../src/stringCalculator');

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

test("supports newline as delimiter", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("supports custom delimiter", () => {
  expect(add("//;\n1;2")).toBe(3);
});

test("throws exception on single negative number", () => {
  expect(() => add("1,-5")).toThrow("negative numbers not allowed: -5");
});

test("throws exception for all negative numbers", () => {
  expect(() => add("-1,-4,-2,1,8,-7")).toThrow("negative numbers not allowed: -1, -4, -2, -7");
});

test("ignores numbers greater than 1000", () => {
  expect(add("1,1001,1002")).toBe(1);
})

test("custom delimiter of any length", () => {
  expect(add("//[*][%]\n1*2%3")).toBe(6);
})

