const { getFuelForMass } = require("./part1");

const getFuelsForMass = mass => {
  let copyOfMass = mass; // for immutability
  const fuels = [];

  while (copyOfMass > 5) {
    // the lowest possible value for mass that will not yield a negative mass
    const fuel = getFuelForMass(copyOfMass);
    fuels.push(fuel);
    copyOfMass = fuel;
  }
  return fuels;
};

const getSumOfFuelsForMass = mass => {
  const fuels = getFuelsForMass(mass);
  return fuels.reduce((sum, fuel) => sum + fuel, 0);
};

const getSumOfFuelsForMasses = masses => {
  const cumulativeFuelSums = masses.map(getSumOfFuelsForMass);
  return cumulativeFuelSums.reduce(
    (sum, cumulativeFuelSum) => sum + cumulativeFuelSum,
    0
  );
};

module.exports = { getSumOfFuelsForMass, getSumOfFuelsForMasses };
