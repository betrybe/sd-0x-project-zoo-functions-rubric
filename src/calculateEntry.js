const { prices } = require('../data/zoo_data');

function countEntrants(clients) {
  const child = clients.filter(({ age }) => age < 18).length;
  const adult = clients.filter(({ age }) => age >= 18 && age < 50).length;
  const senior = clients.filter(({ age }) => age >= 50).length;
  return { child, adult, senior };
}

function calculateEntry(clients = []) {
  if (!Array.isArray(clients)) return 0;
  const summary = countEntrants(clients);
  return Object.entries(summary).reduce((acc, [type, ammount]) => {
    const partial = prices[type] * ammount;
    return partial + acc;
  }, 0);
}

module.exports = { calculateEntry, countEntrants };
