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
  const obj1 = check(s1);
  const obj2 = check(s2);
  let count = 0;
  const entries1 = Object.entries(obj1);
  for (let i = 0; i < entries1.length; i++) {
    if (entries1[i][0] in obj2) {
      if (entries1[i][1] === obj2[entries1[i][0]]) {
        count += entries1[i][1];
      } else if (entries1[i][1] < obj2[entries1[i][0]]) {
        count += entries1[i][1];
      } else {
        count += obj2[entries1[i][0]];
      }
    }
  }
  return count;
}

module.exports = getCommonCharacterCount;
