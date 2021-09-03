const data = require('../data/zoo_data');

function buildSentence(dayName) {
  const { open, close } = data.hours[dayName];
  const IS_OPEN = close - open;
  if (IS_OPEN) return `Open from ${open}am until ${close}pm`;
  return 'CLOSED';
}

function wichAnimalsWillAppear(dayName) {
  const animals = data.species.filter(({ availability }) => availability.includes(dayName))
    .map(({ name }) => name);
  if (animals.length) {
    return animals;
  }
  return 'The zoo will be closed!';
}

function getDaySchedule(dayName = false) {
  const FINAL_SCHEDULE = {};
  if (dayName) {
    FINAL_SCHEDULE[dayName] = {
      officeHour: buildSentence(dayName),
      exhibition: wichAnimalsWillAppear(dayName),
    };
  } else {
    const days = Object.keys(data.hours);
    days.forEach((day) => {
      FINAL_SCHEDULE[day] = {
        officeHour: buildSentence(day),
        exhibition: wichAnimalsWillAppear(day),
      };
    });
  }
  return FINAL_SCHEDULE;
}

function getAnimalSchedule(animalName) {
  const { availability } = data.species.find(({ name }) => name === animalName);
  return availability;
}

function getSchedule(scheduleTarget = false) {
  const SHOULD_GET_ANIMAL_SCHEDULE = data.species.map((specie) => specie.name)
    .includes(scheduleTarget);
  const SHOULD_GET_DAYS_SCHEDULE = Object.keys(data.hours).includes(scheduleTarget);

  if (SHOULD_GET_DAYS_SCHEDULE) return getDaySchedule(scheduleTarget);
  if (SHOULD_GET_ANIMAL_SCHEDULE) return getAnimalSchedule(scheduleTarget);
  return getDaySchedule();
}

module.exports = getSchedule;
