const usedNames = new Set();
function generateRandomName() {
  let abc = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let randomLetters =
    abc[Math.floor(Math.random() * abc.length)] +
    abc[Math.floor(Math.random() * abc.length)];
  let randomNumbers =
    numbers[Math.floor(Math.random() * numbers.length)].toString() +
    numbers[Math.floor(Math.random() * numbers.length)].toString() +
    numbers[Math.floor(Math.random() * numbers.length)].toString();
  let name = randomLetters + randomNumbers;

  while (usedNames.has(name)) {
    randomLetters = (
      abc[Math.floor(Math.random() * abc.length)] +
      abc[Math.floor(Math.random() * abc.length)]
    ).toUpperCase();
    randomNumbers =
      numbers[Math.floor(Math.random() * numbers.length)].toString() +
      numbers[Math.floor(Math.random() * numbers.length)].toString() +
      numbers[Math.floor(Math.random() * numbers.length)].toString();
    name = randomLetters + randomNumbers;
  }

  usedNames.add(name);
  return randomLetters + randomNumbers;
}

export class Robot {
  #name;

  constructor() {
    this.#name = generateRandomName();
  }

  get name() {
    return this.#name;
  }

  reset() {
    this.#name = generateRandomName();
  }
}

Robot.releaseNames = () => {};
