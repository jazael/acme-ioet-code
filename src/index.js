const { calculatorScheduleFrequency } = require('./employeefrequency');

const response = calculatorScheduleFrequency('./data.txt');
console.log(response.join('\n'))