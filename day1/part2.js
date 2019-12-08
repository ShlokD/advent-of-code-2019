const { fuelCalculator } = require("./part1");

const getListOfFuels = mass => {
  let copyOfMass = mass; // for immutability
  const fuels = [];

  while (copyOfMass > 5) {
    // the lowest possible value for mass that will not yield a negative mass
    const fuel = fuelCalculator(copyOfMass);
    fuels.push(fuel);
    copyOfMass = fuel;
  }
  return fuels;
};

const cumulativeFuelCalculator = mass => {
  const fuels = getListOfFuels(mass);
  return fuels.reduce((sum, fuel) => (sum += fuel), 0);
};

const cumulativeFuelSummer = masses => {
  const cumulativeFuelSums = masses.map(cumulativeFuelCalculator);
  return cumulativeFuelSums.reduce(
    (sum, cumulativeFuelSum) => (sum += cumulativeFuelSum),
    0
  );
};

module.exports = { cumulativeFuelCalculator, cumulativeFuelSummer };
