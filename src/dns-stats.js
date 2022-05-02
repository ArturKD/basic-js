const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};

  for (let item of domains) {
    while (item) {
      let subItem = "." + item.split(".").reverse().join(".");
      let index = item.indexOf(".");
      obj[subItem] = (obj[subItem] || 0) + 1;
      item = index !== - 1 ? item.slice(index + 1) : "";
    }
  }
  return obj;
}

module.exports = {
  getDNSStats
};
