const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if (s1 === '' || s2 === '') {
    return 0;
  } else {
    let first = s1.split('');
    let second = s2.split('');
    let counter = 0;

    for (let i = 0; i < first.length; i++) {
      for (let y = 0; y < second.length; y++) {
        if (first[i] === second[y]) {
          counter++;
          second.splice(y, 1);
          break;
        }
      }
    }
    return counter;
  }
}

module.exports = {
  getCommonCharacterCount
};
