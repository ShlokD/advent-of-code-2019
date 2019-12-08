const { fuelData } = require("./fueldata");
const { cumulativeFuelCalculator, cumulativeFuelSummer } = require("./part2");

describe("Cumulative Fuel Calculator", () => {
  test("Given mass: 12, required cumulative fuel is 2", () => {
    expected = 2;
    actual = cumulativeFuelCalculator(12);
    expect(actual).toEqual(expected);
  });

  test("Given mass: 14, required cumulative fuel is 2", () => {
    expected = 2;
    actual = cumulativeFuelCalculator(14);
    expect(actual).toEqual(expected);
  });

  test("Given mass: 1969, required cumulative fuel is 966", () => {
    expected = 966;
    actual = cumulativeFuelCalculator(1969);
    expect(actual).toEqual(expected);
  });

  test("Given mass: 100756, required cumulative fuel is 50346", () => {
    expected = 50346;
    actual = cumulativeFuelCalculator(100756);
    expect(actual).toEqual(expected);
  });
});

describe("Fuel Summation", () => {
  test("Given masses [12, 14, 1969], required fuel is 658", () => {
    expected = 970;
    actual = cumulativeFuelSummer([12, 14, 1969]);
    expect(actual).toEqual(expected);
  });

  test("Given masses of fuel data, required fuel is 3249140", () => {
    expected = 4870838;
    actual = cumulativeFuelSummer(fuelData);
    expect(actual).toEqual(expected);
  });
});
