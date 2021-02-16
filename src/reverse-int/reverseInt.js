// Reverse integer

// Input: x = 123
// Output: 321

// Input: x = -123
// Output: -321

function reverse(x) {
  let negative = x < 0 ? -1 : 1;
  let reversed = Number([...String(x * negative)].reverse().join(''));

  if (reversed > Math.pow(2,31)) return 0;
  return reversed * negative;
}

console.log(reverse(-123))
console.log(reverse(123))
console.log(reverse(120))