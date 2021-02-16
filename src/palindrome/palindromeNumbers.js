// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

function palindrome(x) {
  if (x < 0) return false;

  let reversed = 0;
  let tempX = x;

  while(tempX) {
    let digit = tempX % 10;

    reversed = reversed * 10 + digit;
    tempX = Math.floor(Number(tempX / 10));
  }
  return reversed === x;
}

console.log(palindrome(121))