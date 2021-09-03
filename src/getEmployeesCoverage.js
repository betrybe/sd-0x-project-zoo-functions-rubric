const { species, employees } = require('../data/zoo_data');
const getEmployeeByName = require('./getEmployeeByName');

function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

function getSpecies(employee) {
  return species
    .filter(({ id }) => employee.responsibleFor.includes(id))
    .map(({ name }) => name);
}

function getLocations(specieNames) {
  return specieNames.map((specieName) => {
    const cur = species.find((specie) => specie.name === specieName);
    return cur ? cur.location : null;
  });
}

function getEmployeeById(id) {
  return employees.find((employee) => employee.id === id);
}

function getEmployeeCoverage({ id, name }) {
  const employee = name ? getEmployeeByName(name) : getEmployeeById(id);
  if (!employee) throw new Error('Informações inválidas');
  const fullName = getFullName(employee);
  const employeeSpecies = getSpecies(employee);
  const locations = getLocations(employeeSpecies);
  return { id: employee.id, fullName, species: employeeSpecies, locations };
}

function getEmployeesCoverage({ id, name } = {}) {
  if (id || name) return getEmployeeCoverage({ id, name });
  return employees.map(getEmployeeCoverage);
}

module.exports = getEmployeesCoverage;
