// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

function twoSum(nums, target) {
  let indexList = [];

  for(let i = 0; i <= nums.length; i++) {
    let firstNum = nums[i];

    for(let j = i + 1; j <= nums.length; j++) {
      let secondNum = nums[j];

      if (firstNum + secondNum === target) {
        indexList.push(i, j);
        break;
      }
    }
  }

  return indexList;
}

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4],6));


// not my solution

// function twoSum(nums, target) {
//   const map = new Map()
//
//   for(let i=0; i<nums.length; i++) {
//     const number = nums[i]
//     const complement = target - number
//
//     if(map.has(complement)) {
//       return [i, map.get(complement)]
//     }
//
//     map.set(number, i)
//   }
// }




