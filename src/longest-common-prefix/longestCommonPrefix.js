function longestCommonPrefix(strs) {
  let prefix;

  strs.sort((a,b) => a.length - b.length);

  for(let i = 0; i < strs.length; i++) {
    let str = strs[i];
    let temp = [];

    if(i === 0) {
      prefix = str.split('');
    } else {
      for(let j = 0; j < prefix.length; j++) {
        let char1 = str[j];
        let char2 = prefix[j];

        if (char1 === char2) {
          temp.push(char1);
        } else {
          prefix = temp;
          break;
        }
      }
      prefix = temp;
    }
  }

  return prefix ? prefix.join('') : '';
}

console.log(longestCommonPrefix(["aflower","bflow","sflight"]))