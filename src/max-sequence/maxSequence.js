function maxSequence(arr) {
  let maxSum = 0;

  // easy way O(n^2)
  // for(let i = 0; i < arr.length; i++) {
  //   let calcSum = arr[i];
  //   if (calcSum > maxSum) maxSum = calcSum;
  //
  //   for(let j = i + 1; j < arr.length; j++) {
  //     calcSum += arr[j];
  //
  //     if (calcSum > maxSum) maxSum = calcSum;
  //   }
  // }


  // O(n)
  let calcSum = 0;

  for(let item of arr) {
    calcSum += item;
    if (calcSum > maxSum) maxSum = calcSum;
    if (calcSum < 0) calcSum = 0;
  }


  return maxSum;
}


console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))