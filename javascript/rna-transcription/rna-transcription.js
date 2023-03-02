//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
function individualTranscription(char) {
  switch (char) {
    case '':
      return char;
    case 'C':
      return 'G';
    case 'G':
      return 'C';
    case 'T':
      return 'A';
    case 'A':
      return 'U';
  }
}
export const toRna = (sequence) => {
  let splitSequence = sequence.split('');
  let result = '';
  splitSequence.forEach((char) => {
    result += individualTranscription(char);
  });
  return result;
};
