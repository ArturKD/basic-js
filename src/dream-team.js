const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  } else {
    let arr = [];
    let team = members.filter((member) => typeof member === "string");
    for (let i = 0; i < team.length; i++) {
        arr.push(team[i].trim()[0].toUpperCase());
    }
    arr.sort();
    return arr.join("");
  }
}

module.exports = {
  createDreamTeam
};
