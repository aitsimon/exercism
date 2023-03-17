//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  const lastCharacter = message.trim().charAt(message.trim().length - 1);
  let result = '';
  switch (true) {
    case /[A-Z]+\?$/.test(message) && message === message.toUpperCase():
      result = "Calm down, I know what I'm doing!";
      break;
    case /[A-Z0-9]+\!*$/.test(message) && !/[0-9]/.test(lastCharacter):
      result = 'Whoa, chill out!';
      break;
    case lastCharacter === '?':
      result = 'Sure.';
      break;
    case message.trim() === '':
      result = 'Fine. Be that way!';
      break;
    default:
      result = 'Whatever.';
  }
  return result;
};
