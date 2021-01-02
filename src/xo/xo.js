// if x equals o returns true, else false

function XO(str) {
  const x = str.match(/x/gi) || [];
  const o = str.match(/o/gi) || [];

  return x.length === o.length;
}

console.log(XO('XXxOoOoO'));
console.log(XO('xOOo'));
console.log(XO(''));
console.log(XO('oOxx'));