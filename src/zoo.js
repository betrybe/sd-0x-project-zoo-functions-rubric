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

function getSchedule(dayName) {
  const { hours } = data;
  const result = {};

  Object.entries(hours).forEach(([key, value]) => {
    const { open, close } = value;
    if (dayName === key || !dayName) {
      result[key] = (open === 0 && close === 0) ? 'CLOSED'
        : `Open from ${open}am until ${close - 12}pm`;
    }
  });
  return result;
}

function getOldestFromFirstSpecies(id) {
  const { employees } = data;
  const { species } = data;

  const animId = employees.filter(({ id: ident }) => ident === id)[0]
    .responsibleFor[0];

  const result = species.filter(({ id: ident }) => ident === animId)[0]
    .residents
    .sort((a, b) => b.age - a.age)[0];

  return Object.values(result);
}

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
