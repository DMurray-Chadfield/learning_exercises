function getSleepHours(day) {
    switch (day) {
      case 'monday':
        return 8;
        break;
      case 'tuesday':
        return 7;
        break;
      case 'wednesday':
        return 7;
        break;
      case 'thursday':
        return 7;
        break;
      case 'friday':
        return 10;
        break;
      case 'saturday':
        return 10;
        break;
      case 'sunday':
        return 11;
        break;
    };
  };
  function getActualSleepHours() {
    let totalHours = getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
    return totalHours;
  };
  function getIdealSleepHours(idealHours) {
    return idealHours * 7;
  };
  function calculateSleepDebt() {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours(8); 
    if (actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount of sleep.');
    } else if (actualSleepHours > idealSleepHours) {
      let difference = actualSleepHours - idealSleepHours;
      console.log(`You got ${difference} more sleep than needed.`);
    } else {
      let difference = idealSleepHours - actualSleepHours;
      console.log(`You should get some rest. You need ${difference} more sleep this week.`);
    };
  };
  calculateSleepDebt();