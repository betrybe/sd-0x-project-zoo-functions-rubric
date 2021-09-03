const data = require('../data/zoo_data');

function isManager(id) {
  const { employees } = data;
  return employees.some(({ managers }) => managers.indexOf(id) !== -1);
}

function getRelatedEmployees(managerId) {
  // seu código aqui
}

module.exports = { isManager, getRelatedEmployees };
