export const commands = (number) => {
  let binaryStr = number.toString(2);
  let allActions = [];
  const ACTIONS = {
    0: 'wink',
    1: 'double blink',
    2: 'close your eyes',
    3: 'jump',
    4 : 'reverse'
  }
  let splicedStr = [...binaryStr];
  for(let i = 0; i< splicedStr.length; i++){
    let char = splicedStr[splicedStr.length-i-1]
    if(char === '1')allActions.push(ACTIONS[i]);
  }
  let output = [];
  allActions.forEach(element =>{
    if(element ==='reverse'){
      output = output.reverse();
    }else{
      output.push(element)
    }
  })
  return output;
};