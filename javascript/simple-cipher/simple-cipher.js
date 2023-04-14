export class Cipher {
  constructor(key = generateRandomKey()) {
    if (!/^[a-z]+$/.test(key)) {
      throw new Error('Invalid key');
    }
    this.key = key;
  }
  encode(plaintext) {
    let ciphertext = '';
    for (let i = 0; i < plaintext.length; i++) {
      let shift = this.key.charCodeAt(i % this.key.length) - 97;
      ciphertext += String.fromCharCode(
        ((plaintext.charCodeAt(i) - 97 + shift) % 26) + 97
      );
    }
    return ciphertext;
  }
  decode(ciphertext) {
    let plaintext = '';
    for (let i = 0; i < ciphertext.length; i++) {
      let shift = this.key.charCodeAt(i % this.key.length) - 97;
      plaintext += String.fromCharCode(
        ((ciphertext.charCodeAt(i) - 97 - shift + 26) % 26) + 97
      );
    }
    return plaintext;
  }
}
function generateRandomKey(length = 100) {
  let key = '';
  for (let i = 0; i < length; i++) {
    key += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  return key;
}
