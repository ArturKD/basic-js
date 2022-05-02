const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!arguments.length) {
    return 'Unable to determine the time of year!';
  } else if (!(date instanceof Date) || date.hasOwnProperty('getMonth') || date.hasOwnProperty('toString')) {
    throw new Error('Invalid date!');
  } else {
    let monthNumber = date.getMonth();
    if (monthNumber < 2 || monthNumber === 11) {
      return 'winter';
    } else if (monthNumber > 1 && monthNumber < 5) {
      return 'spring';
    } else if (monthNumber > 4 && monthNumber < 8) {
      return 'summer';
    } else {
      return 'autumn';
    }
  }
}

module.exports = {
  getSeason
};
