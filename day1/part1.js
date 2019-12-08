const getFuelForMass = mass => Math.floor(mass / 3) - 2;

const getFuelForMasses = masses =>
  masses.reduce((sum, mass) => sum + getFuelForMass(mass), 0);

module.exports = { getFuelForMass, getFuelForMasses };
