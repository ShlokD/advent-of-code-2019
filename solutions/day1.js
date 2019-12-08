const fuelCalculator = mass => {
  return Math.floor(mass / 3) - 2;
};

const fuelSummation = (masses) => masses.reduce((sum, mass) =>  sum += fuelCalculator(mass), 0)
module.exports = { fuelCalculator, fuelSummation };
