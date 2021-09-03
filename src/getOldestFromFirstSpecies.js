const data = require('../data/zoo_data');

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

module.exports = getOldestFromFirstSpecies;
