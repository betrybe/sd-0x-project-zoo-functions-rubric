const getOldestFromFirstSpecies = require('../src/getOldestFromFirstSpecies');

describe('9 - Crie uma função que busca o animal mais velho da primeira espécie gerenciada', () => {
  describe('Implemente a função getOldestFromFirstSpecies', () => {
    it('Passado o id de um funcionário, encontra a primeira espécie de animal gerenciado pelo funcionário, e retorna um array com nome, sexo e idade do animal mais velho dessa espécie', () => {
      {
        const actual = getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992');
        const expected = ['Vicky', 'female', 12];
        expect(actual).toEqual(expected);
      }
  
      {
        const actual = getOldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad');
        const expected = ['Margherita', 'female', 10];
        expect(actual).toEqual(expected);
      }
    });
  });
});
