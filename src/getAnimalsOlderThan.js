const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  return species.filter(({ name }) => name === animal)[0]
    .residents
    .every(({ age: idade }) => idade >= age);
}

module.exports = getAnimalsOlderThan;
