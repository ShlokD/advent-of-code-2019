const { fuelData } = require("./fueldata");
const { getFuelForMass, getFuelForMasses } = require("./part1");

describe("Fuel for individual mass", () => {
  let actual;
  let expected;
  test("Given mass: 12, required fuel is 2", () => {
    expected = 2;
    actual = getFuelForMass(12);
    expect(actual).toEqual(expected);
  });

  test("Given mass: 14, required fuel is 2", () => {
    expected = 2;
    actual = getFuelForMass(14);
    expect(actual).toEqual(expected);
  });

  test("Given mass: 1969, required fuel is 654", () => {
    expected = 654;
    actual = getFuelForMass(1969);
    expect(actual).toEqual(expected);
  });

  test("Given mass: 100756, required fuel is 33583", () => {
    expected = 2;
    actual = getFuelForMass(12);
    expect(actual).toEqual(expected);
  });
});

describe("Fuel for list of masses", () => {
  let expected;
  let actual;
  
  test("Given masses [12, 14, 1969], required fuel is 658", () => {
    expected = 658;
    actual = getFuelForMasses([12, 14, 1969]);
    expect(actual).toEqual(expected);
  });

  test("Given masses of fuel data, required fuel is 3249140", () => {
    expected = 3249140;
    actual = getFuelForMasses(fuelData);
    expect(actual).toEqual(expected);
  });
});
