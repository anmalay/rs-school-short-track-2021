/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('');
  const newArr = [];
  let barr = [...arr];
  for (let i = 0; i < arr.length; i++) {
    barr.splice(i, 1);
    newArr.push(barr.join(''));
    barr = [...arr];
  }
  return Math.max(...newArr);
}

module.exports = deleteDigit;
