const getSchedule = require('../src/getSchedule');

describe('8 - Crie o agendamento que disponibilize as informações de horário dos animais com o dia que os animais estão disponíveis', () => {
  describe('Implemente a função getSchedule', () => {
    it('deveria retornar um objeto com os horários do dia e os animais em exibição quando não houver parâmetros', () => {
      const actual = getSchedule();
  
      const expected = {
        'Tuesday': {
          'officeHour': 'Open from 8am until 18pm',
          'exhibition': [ 'lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes' ],
        },
        'Wednesday': {
          'officeHour': 'Open from 8am until 18pm',
          'exhibition': [ 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes' ],
        },
        'Thursday': {
          'officeHour': 'Open from 10am until 20pm',
          'exhibition': [ 'lions', 'otters', 'frogs', 'snakes', 'giraffes' ],
        },
        'Friday': {
          'officeHour': 'Open from 10am until 20pm',
          'exhibition': [ 'tigers', 'otters', 'frogs', 'elephants', 'giraffes' ],
        },
        'Saturday': {
          'officeHour': 'Open from 8am until 22pm',
          'exhibition': [
            'lions',  'tigers',
            'bears',  'penguins',
            'otters', 'frogs',
            'snakes', 'elephants',
          ],
        },
        'Sunday': {
          'officeHour': 'Open from 8am until 20pm',
          'exhibition': [ 'lions', 'bears', 'penguins', 'snakes', 'elephants' ],
        },
        'Monday': { 'officeHour': 'CLOSED', 'exhibition': 'The zoo will be closed!' },
      };
  
      expect(actual).toEqual(expected);
    });
    
    it('deveria retornar um objeto com os horários do dia e os animais em exibição caso o parâmetro não seja nem um dia e nem um animal', () => {
      const actual = getSchedule('qualquercoisa');
  
      const expected = {
        'Tuesday': {
          'officeHour': 'Open from 8am until 18pm',
          'exhibition': [ 'lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes' ],
        },
        'Wednesday': {
          'officeHour': 'Open from 8am until 18pm',
          'exhibition': [ 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes' ],
        },
        'Thursday': {
          'officeHour': 'Open from 10am until 20pm',
          'exhibition': [ 'lions', 'otters', 'frogs', 'snakes', 'giraffes' ],
        },
        'Friday': {
          'officeHour': 'Open from 10am until 20pm',
          'exhibition': [ 'tigers', 'otters', 'frogs', 'elephants', 'giraffes' ],
        },
        'Saturday': {
          'officeHour': 'Open from 8am until 22pm',
          'exhibition': [
            'lions',  'tigers',
            'bears',  'penguins',
            'otters', 'frogs',
            'snakes', 'elephants',
          ],
        },
        'Sunday': {
          'officeHour': 'Open from 8am until 20pm',
          'exhibition': [ 'lions', 'bears', 'penguins', 'snakes', 'elephants' ],
        },
        'Monday': { 'officeHour': 'CLOSED', 'exhibition': 'The zoo will be closed!' },
      };
    
      expect(actual).toEqual(expected);
    });
  
    it('Se "Monday" for passado por parâmetro, deverá informar que o zoológico está fechado', () => {
      const actual = getSchedule('Monday');
  
      const expected = {
        'Monday': { 'officeHour': 'CLOSED', 'exhibition': 'The zoo will be closed!' },
      };
  
      expect(actual).toEqual(expected);
    });
  
    it('Se um dia for passado, retorna somente o horário daquele expediente e os animais em exibição no dia', () => {
    {
      const actual = getSchedule('Tuesday');
  
      const expected = {
        'Tuesday': {
          'officeHour': 'Open from 8am until 18pm',
          'exhibition': [ 'lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes' ],
        },
      };
  
      expect(actual).toEqual(expected);
    }
  
    {
      const actual = getSchedule('Wednesday');
  
      const expected = {
        'Wednesday': {
          'officeHour': 'Open from 8am until 18pm',
          'exhibition': [ 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes' ],
        },
      };
      
      expect(actual).toEqual(expected);
    }
  
    });
  
    it('Se for passado um animal, deverá retornar um array com os dias em que ele está em exibição', () => {
      {
        const actual = getSchedule('lions');
        const expected = [ 'Tuesday', 'Thursday', 'Saturday', 'Sunday' ];
        expect(actual).toEqual(expected);
      }
  
      {
        const actual = getSchedule('penguins');
        const expected = [ 'Tuesday', 'Wednesday', 'Sunday', 'Saturday' ];
        expect(actual).toEqual(expected);
      }
    });

  })
});
