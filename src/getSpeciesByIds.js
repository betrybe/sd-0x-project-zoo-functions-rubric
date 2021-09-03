const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const result = [];
  if (!ids.length) return result;
  const { species } = data;
  species.forEach((animal) => {
    ids.forEach((id) => {
      if (id === animal.id) result.push(animal);
    });
  });
  return result;
}

module.exports = getSpeciesByIds;
