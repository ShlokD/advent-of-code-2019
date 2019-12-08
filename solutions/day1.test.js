const {fuelData} = require("./fueldata")
const { fuelCalculator, fuelSummation } = require("./day1");

describe("Fuel Calculator", () => {
  test("Given mass: 12, required fuel is 2", () => {
    expected = 2;
    actual = fuelCalculator(12);
    expect(actual).toEqual(expected);
  });

  test("Given mass: 14, required fuel is 2", () => {
    expected = 2;
    actual = fuelCalculator(14);
    expect(actual).toEqual(expected);
  });

  test("Given mass: 1969, required fuel is 654", () => {
    expected = 654;
    actual = fuelCalculator(1969);
    expect(actual).toEqual(expected);
  });

  test("Given mass: 100756, required fuel is 33583", () => {
    expected = 2;
    actual = fuelCalculator(12);
    expect(actual).toEqual(expected);
  });
});

describe("Fuel Summation", () => {
  test("Given masses [12, 14, 1969], required fuel is 658", () => {
    expected = 658;
    actual = fuelSummation([12, 14, 1969]);
    expect(actual).toEqual(expected);
  });

  test("Given masses of fuel data, required fuel is 3249140", () => {
    expected = 3249140;
    actual = fuelSummation(fuelData);
    expect(actual).toEqual(expected);
  });
});