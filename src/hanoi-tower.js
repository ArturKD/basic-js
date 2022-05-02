const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let time = 3600;
  let turns = 0;
  let seconds = 0;

  for (let i = 1; i < disksNumber + 1; i++) {
    turns += Math.pow(2, (i - 1));
  };

  seconds = Math.floor(turns * time/ turnsSpeed);

  return { turns: turns, seconds: seconds };
}

module.exports = {
  calculateHanoi
};
