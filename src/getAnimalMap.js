const data = require('../data/zoo_data');

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

module.exports = getAnimalMap;
