//  You are given two non-empty linked lists representing two non-negative integers.
//  The digits are stored in reverse order, and each of their nodes contains a single digit.
//  Add the two numbers and return the sum as a linked list.

//  Input: l1 = [2,4,3], l2 = [5,6,4]
//  Output: [7,0,8]
//  Explanation: 342 + 465 = 807.

function addTwoNumbers(l1, l2) {
  let l1Reversed = Number(l1.reverse().join(''));
  let l2Reversed = Number(l2.reverse().join(''));

  return [...String(l1Reversed + l2Reversed)].reverse().map(a => Number(a));
}


console.log(addTwoNumbers([2,4,3], [5,6,4]));
console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]));