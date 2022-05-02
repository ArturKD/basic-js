const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(something) {
  let counter = 0;
  for (let i = 0; i < something.length; i++) {
    for (let y = 0; y < something[i].length; y++) {
      if (something[i][y] === '^^') {
        counter++;
      }
    }
  }
  return counter;
}

module.exports = {
  countCats
};
