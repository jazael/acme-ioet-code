const readFile = require('./readfile');
const { group_in_pairs, is_in_range } = require('./utilities')

const count_similarities = (scheduleFirstElement, scheduleSecondElement) => {
  let frequency = 0;

  for (const scheduleFirst of scheduleFirstElement) {
    const schedule_abbreviation = scheduleFirst.slice(0, 2);
    const arrTimes = scheduleFirst.slice(2).split('-');
    const found = scheduleSecondElement.indexOf(scheduleFirst) >= 0;
    if (!found) {
      const arrFilterSchedule = scheduleSecondElement.filter(scheduleSecond => {
        const schedule_second_abbreviation = scheduleSecond.slice(0, 2);
        return schedule_second_abbreviation === schedule_abbreviation;
      });
      for (const schedule of arrFilterSchedule) {
        const rangeInit = is_in_range(arrTimes[0], schedule.slice(2).split('-'));
        const rangeEnd = is_in_range(arrTimes[1], schedule.slice(2).split('-'));
        if (rangeInit && rangeEnd) {
          frequency++;
        }
      }
    } else {
      frequency++;
    }
  }

  return frequency;
}

calculatorScheduleFrequency = (file) => {
  const informationFile = readFile(file);
  const listEmployee = [];
  const pairsSchedules = informationFile.length === 2 ? [informationFile] : group_in_pairs(informationFile);
  for (const schedule of pairsSchedules) {
    const countSimilarities = count_similarities(schedule[0].schedules, schedule[1].schedules);
    if (countSimilarities > 0) {
      listEmployee.push(`${schedule[0].employee} - ${schedule[1].employee}: ${countSimilarities}`)
    }
  }

  return listEmployee;
}

module.exports = {
  count_similarities,
  calculatorScheduleFrequency
};
