//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
const modedAlphabet = [];
for (let i = 0; i < alphabet.length; i++) {
  const element = alphabet[i - 2];
  element = element === undefined ? alphabet[alphabet.length - 2] : element;
  modedAlphabet.push(element);
}
console.log(modedAlphabet);
export class Cipher {
  constructor() {
    throw new Error('Remove this statement and implement this function');
  }

  encode() {
    throw new Error('Remove this statement and implement this function');
  }

  decode() {
    throw new Error('Remove this statement and implement this function');
  }

  get key() {
    throw new Error('Remove this statement and implement this function');
  }
}
