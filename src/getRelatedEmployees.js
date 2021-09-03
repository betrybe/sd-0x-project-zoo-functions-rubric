const data = require('../data/zoo_data');

function isManager(id) {
  const { employees } = data;
  return employees.some(({ managers }) => managers.includes(id));
}

function getRelatedEmployees(managerId) {
  const { employees } = data;
  const verifyManager = isManager(managerId);
  if (verifyManager) {
    return employees
      .filter(({ managers }) => managers.includes(managerId))
      .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
