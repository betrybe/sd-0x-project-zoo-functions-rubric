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

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const { employees } = data;
  return employees.some(({ managers }) => managers.indexOf(id) !== -1);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const { employees } = data;
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(specie) {
  const { species } = data;
  const result = {};
  if (specie) return species.find(({ name }) => name === specie).residents.length;
  species.map(({ name, residents }) => [name, residents.length])
    .forEach(({ 0: name, 1: length }) => {
      result[name] = length;
    });
  return result;
}

function calculateEntry(entrants = {}) {
  if (!Object.keys(entrants).length) return 0;
  const { prices } = data;
  let total = 0;
  Object.entries(prices).forEach(([key, price]) => {
    if (entrants[key]) total += entrants[key] * price;
  });
  return total;
}

function animalsByLocation(locations) {
  const objOfAnimals = {};
  locations.forEach((location) => {
    const animalsFiltered = data.species
      .filter((animal) => animal.location === location)
      .map((animal) => animal.name);
    objOfAnimals[location] = animalsFiltered;
  });
  return objOfAnimals;
}

function animalsByLocationWithname(locations, sorted, sex) {
  const objOfAnimals = {};
  locations.forEach((location) => {
    const animalsFiltered = data.species
      .filter((animal) => animal.location === location)
      .map(({ name, residents }) => {
        const key = { name, value: '' };
        if (sex) {
          key.value = residents.filter((animalPerSex) => animalPerSex.sex === sex)
            .map((resident) => resident.name);
        } else key.value = residents.map((resident) => resident.name);
        if (sorted === true) return { [key.name]: key.value.sort() };
        return { [key.name]: key.value };
      });
    objOfAnimals[location] = animalsFiltered;
  });
  return objOfAnimals;
}

function getAnimalMap(options = {}) {
  const locations = ['NW', 'NE', 'SW', 'SE'];
  const { sorted, sex, includeNames } = options;
  if (includeNames === true) {
    return animalsByLocationWithname(locations, sorted, sex);
  }
  return animalsByLocation(locations);
}

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
