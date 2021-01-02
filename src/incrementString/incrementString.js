// increment number at the end of string or adds 1 to the end of string

function incrString(str) {
  let matched = str.match(/[0-9]+$/gi);
  let incremented;

  if (matched) {
    let split = [...`${matched}`];
    let stringPart = str.match(/^[^0-9]+/gi);
    let temp = '';

    for(let i = split.length - 1; i >= 0; i--) {
      if (split[i] === '9') {
        temp += split[i]
        if (i === 0) {
          incremented = calcParts(split, i, stringPart);
        }
      } else {
        incremented = calcParts(split, i, stringPart);
        break;
      }
    }


  } else {
    incremented = str + 1;
    return incremented;
}

  return incremented;
}

function calcParts(matchedValue, index, stringPart) {
  let firesPart = matchedValue.slice(0, index);
  let secondPart = parseFloat(matchedValue.slice(index, matchedValue.length).join(''));
  return (stringPart || '') + firesPart.join('') + (secondPart + 1);
}

console.log(incrString('fooobar000'))
console.log(incrString('fooobar'))
console.log(incrString('fooobar999'))
console.log(incrString('fooobar1'))
console.log(incrString('1'))