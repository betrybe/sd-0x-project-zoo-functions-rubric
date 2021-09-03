/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

function increasePrices(percentage) {
  const { prices } = data;
  Object.keys(prices).forEach((key) => {
    prices[key] *= (percentage / 100) + 1;
    prices[key] = Number((Math.floor(Number((prices[key]) * 100) + 1) / 100).toFixed(2));
  });
}

function getEmployeeCoverage(idOrName) {
  let { employees } = data;
  const { species } = data;
  const result = {};

  if (idOrName) {
    employees = employees.filter(({ id, firstName, lastName }) => (
      id === idOrName || firstName === idOrName || lastName === idOrName
    ));
  }

  employees.forEach(({ firstName, lastName, responsibleFor }) => {
    result[`${firstName} ${lastName}`] = responsibleFor.map((id) => (
      species.filter(({ id: animId }) => (animId === id))[0].name
    ));
  });

  return result;
}

module.exports = {
  getSpeciesByIds,
  getAnimalsOlderThan,
  getEmployeeByName,
  createEmployee,
  isManager,
  addEmployee,
  countAnimals,
  calculateEntry,
  getAnimalMap,
  getSchedule,
  getOldestFromFirstSpecies,
  increasePrices,
  getEmployeeCoverage,
};
