// A string of braces is considered valid if all braces are matched with the correct brace.
// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

function validBraces(braces) {

  if (braces.length % 2 !== 0) return false;

  const bracersMap = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  const matched = [];
  const bracersArray = [...braces];

  bracersArray.forEach((value) => {
    if (bracersMap[value]) {
      matched.push(value);
    } else {
      console.log(value, bracersMap[matched[matched.length - 1]])
      if (value === bracersMap[matched[matched.length - 1]]) {
        matched.pop();
      } else {
        matched.push(value);
      }
    }
  })

  return matched.length === 0;
}

console.log(validBraces('()[]{}'))
console.log(validBraces('({[]})'))
console.log(validBraces('(){})()'))
console.log(validBraces(''))