const { hours, species } = require('../data/zoo_data');

function buildSentence(dayName) {
  const { open, close } = hours[dayName];
  return dayName === 'Monday' ? 'CLOSED' : `Open from ${open}am until ${close}pm`;
}

function wichAnimalsWillAppear(dayName) {
  const animals = species.filter(({ availability }) => availability.includes(dayName))
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
    const days = Object.keys(hours);
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
  const { availability } = species.find(({ name }) => name === animalName);
  return availability;
}

function getSchedule(scheduleTarget = false) {
  const SHOULD_GET_ANIMAL_SCHEDULE = species.map(({ name }) => name)
    .includes(scheduleTarget);
  const SHOULD_GET_DAYS_SCHEDULE = Object.keys(hours).includes(scheduleTarget);

  if (SHOULD_GET_DAYS_SCHEDULE) return getDaySchedule(scheduleTarget);
  if (SHOULD_GET_ANIMAL_SCHEDULE) return getAnimalSchedule(scheduleTarget);
  return getDaySchedule();
}

module.exports = getSchedule;
