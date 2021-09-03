const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return data.species
      .reduce((acc, { name, residents }) => ({ ...acc, [name]: residents.length }), {});
  }
  if (animal.genre) {
    return data.species
      .find((eachAnimal) => eachAnimal.name === animal.specie).residents
      .filter(({ sex }) => sex === animal.genre).length;
  }
  return data.species.find((eachAnimal) => eachAnimal.name === animal.specie).residents.length;
}

module.exports = countAnimals;
