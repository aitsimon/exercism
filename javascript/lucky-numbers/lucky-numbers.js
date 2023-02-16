// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let sum1 = array1.filter(value => value.toString());
  let sum11 = sum1.reduce((a, b) => a + b, '');
  let sum2 = array2.filter(value => value.toString());
  let sum22 = sum2.reduce((a, b) => a + b, '');
  return parseInt(sum11) + parseInt(sum22);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let strValue = value.toString();
  for (let i = 0; i < strValue.length / 2; i++){
    if (strValue[i]!== strValue[strValue.length - 1 - i]) {
      return false;
    }
  }
  return true; 
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if(!input) return 'Required field';
  if(!Number(input) || Number(input) === 0) return 'Must be a number besides 0';
  return '';
}
