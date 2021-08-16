const countAnimals = require('../src/countAnimals');

describe('5 - Crie uma função que realiza a contagem dos animais de cada espécie', () => {
  describe('Implemente a função countAnimals', () => { 
    it('Sem parâmetros, retorna as espécies e sua quantidade', () => {
      const expected = {
        'lions': 4,
        'tigers': 2,
        'bears': 3,
        'penguins': 4,
        'otters': 4,
        'frogs': 2,
        'snakes': 2,
        'elephants': 4,
        'giraffes': 6
      };
      const actual = countAnimals();
  
      expect(actual).toStrictEqual(expected);
    });
  
    it('Recebendo como parâmetro um objeto com a chave \'specie\', retorna um número, a quantidade de animais daquela espécie', () => {
      let actual = countAnimals({ specie: 'penguins' });
      let expected = 4;
      expect(actual).toBe(expected);
  
      actual = countAnimals({ specie: 'giraffes' });
      expected = 6;
      expect(actual).toBe(expected);
    });
  
    it('Recebendo como parâmetro um objeto com a chave \'specie\' e \'genre\', retorna um número, a quantidade de animais daquela espécie, no gênero selecionado', () => {
      let actual = countAnimals({ specie: 'bears', genre: 'female' });
      let expected = 0;
      expect(actual).toBe(expected);
  
      actual = countAnimals({ specie: 'elephants', genre: 'male' });
      expected = 2;
      expect(actual).toBe(expected);
    });
  });
});
