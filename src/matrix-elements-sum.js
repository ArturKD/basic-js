const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(something) {
  let counter = 0;
  for (let i = 0; i < something[0].length; i++) {
    for (let y = 0; y < something.length; y++) {
      if (something[y][i] === 0) {
        break
      } else {
        counter += something[y][i]
      }
    }
  }
  return counter;
}


module.exports = {
  getMatrixElementsSum
};
