const { climbStair1, climbStair2 } = require("./index");

describe("Testing first function using external cache", () => {
  test("Returns 1 way to climb 1 stair", () => {
    expect(climbStair1(1)).toEqual(1);
  });

  test("Returns 2 ways to climb 2 stairs", () => {
    expect(climbStair1(2)).toEqual(2);
  });

  test("Returns 3 ways to climb 3 stairs", () => {
    expect(climbStair1(3)).toEqual(3);
  });

  test("Returns 5 ways to climb 4 stairs", () => {
    expect(climbStair1(4)).toEqual(5);
  });
});

describe("Testing second function using predefined array", () => {
  test("Returns 1 way to climb 1 stair", () => {
    expect(climbStair2(1)).toEqual(1);
  });

  test("Returns 2 ways to climb 2 stairs", () => {
    expect(climbStair2(2)).toEqual(2);
  });

  test("Returns 3 ways to climb 3 stairs", () => {
    expect(climbStair2(3)).toEqual(3);
  });

  test("Returns 5 ways to climb 4 stairs", () => {
    expect(climbStair2(4)).toEqual(5);
  });
});
