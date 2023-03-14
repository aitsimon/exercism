//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let letterRegex = /^[a-z]$/;
export const isPangram = (sentence) => {
  let alphabetLetters = alphabet.split('');
  let sentenceLetters = sentence.toLowerCase().split('');
  alphabetLetters.filter((letter) => {
    let isALetter = letterRegex.test(letter);
    !isALetter ? false : sentenceLetters.indexOf(letter) === -1;
  });
  return alphabetLetters.length === 0;
};
