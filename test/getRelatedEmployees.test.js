
const { isManager, getRelatedEmployees } = require('../src/getRelatedEmployees')

describe('4 - Crie a gestão dos funcionários de acordo com o respectivo gerente', () => {
  describe('Implemente a função isManager', () => {
    it('Testa se o id passado é de um gerente', () => {
      const actual = isManager('9e7d4524-363c-416a-8759-8aa7e50c0992');
      const expected = true;
      expect(actual).toBe(expected);
    });
    it('Testa se o id passado é de um gerente', () => {
      const actual = isManager('4b40a139-d4dc-4f09-822d-ec25e819a5ad');
      const expected = false;
      expect(actual).toBe(expected);
    });
  });

  describe('Implemente a função getRelatedEmployees', () => {
    it('retorna o nome dos funcionarios do respectivo gerente', () => {
      const actual = getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992');
      const expected = [ 'Burl Bethea', 'Ola Orloff', 'Emery Elser' ];
      expect(actual).toEqual(expected);
    })
    it('Dispara erro com a mensagem "O id inserido não é de uma pessoa colaboradora gerente!", quando o id inserido não for de uma pessoa colaboradora genrente', () => {
      const actual = '4b40a139-d4dc-4f09-822d-ec25e819a5ad';
      expect(() => getRelatedEmployees(actual)).toThrow(/^O id inserido não é de uma pessoa colaboradora gerente!$/);
    })
  
});

});
