/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const mac = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
  ];

  const arrGroup = n.split('-');
  const arrItem = arrGroup.join('').split('');

  if (arrGroup.length !== 6) {
    return false;
  }

  return (
    arrGroup.every((item) => item.length === 2) && arrItem.every((item) => mac.includes(item))
  );
}

module.exports = isMAC48Address;
