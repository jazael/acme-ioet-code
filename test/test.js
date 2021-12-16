const readFile = require('../src/readfile');
const { count_similarities } = require('../src/employeefrequency');

describe('ReadFile utilities module', () => {
  test('readFile is a function', () => {
    expect(typeof readFile).toEqual('function');
  });
});

describe('EmployeeFrequency module', () => {

  test('calculatorScheduleFrequency is a function', () => {
    expect(typeof calculatorScheduleFrequency).toEqual('function');
  });

  test('count_similarities is a function', () => {
    expect(typeof count_similarities).toEqual('function');
  });

  test('Returns the similarities of the worked schedules count_similarities', () => {
    const scheduleFrequencyMocks = [
      {
        employee: 'RENE',
        schedules: [
          'MO10:00-12:00',
          'TU10:00-12:00',
          'TH01:00-03:00',
          'SA14:00-18:00',
          'SU20:00-21:00'
        ]
      },
      {
        employee: 'ASTRID',
        schedules: ['MO10:00-12:00', 'TH12:00-14:00', 'SU20:00-21:00']
      }
    ];

    expect(2).toBe(count_similarities(scheduleFrequencyMocks[0].schedules, scheduleFrequencyMocks[1].schedules));
  });

  test('Returns an erroneous value with respect to similarities of the worked schedules', () => {
    const scheduleFrequencyMocks = [
      {
        employee: 'ASTRID',
        schedules: [ 'MO10:00-12:00', 'TH12:00-14:00', 'SU20:00-21:00' ]
      },
      {
        employee: 'ANDRES',
        schedules: [ 'MO10:00-12:00', 'TH12:00-14:00', 'SU20:00-21:00' ]
      }
    ];

    const calculationOfFrequency = 5;
    expect(calculationOfFrequency).not.toBe(count_similarities(scheduleFrequencyMocks[0].schedules, scheduleFrequencyMocks[1].schedules));
  });

});
