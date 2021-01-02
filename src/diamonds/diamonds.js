// return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters

//  *
// ***
//  *

//   *
//  ***
// *****
//  ***
//   *

function diamond(diamonds) {
  if (diamonds && diamonds > 0 && diamonds % 2 !== 0) {
    let diamondOutput = '';
    let spaces = 0;
    let first = true;

    while(diamonds > 0) {
      let asteriskRow = `${' '.repeat(spaces)}${'*'.repeat(diamonds)}\n`;

      if (first) {
        diamondOutput = diamondOutput.concat('', asteriskRow);
        first = false;
      } else {
        diamondOutput = diamondOutput.concat('', asteriskRow);
        diamondOutput = asteriskRow.concat('', diamondOutput);
      }

      spaces++;
      diamonds -= 2;
    }

    return diamondOutput;
  } else {
    return null;
  }
}

console.log(diamond(-3))
console.log(diamond(5))
console.log(diamond(6))
console.log(diamond(11))
console.log(diamond(-3))
console.log(diamond(9))