// Return a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

function list(names){

  if (!names || !names.length) return '';

  const mappedNames = names.map(a => a.name);

  return mappedNames.reduce((string, name, index) => {
    if (index === 0) {
      return `${name}`;
    } else if (index === mappedNames.length - 1) {
      return `${string} & ${name}`;
    } else {
      return `${string}, ${name}`;
    }
  });
}

console.log(list([ {name: 'Bart'}, {name: 'Lisa'} ]))
console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]))
console.log(list([]))