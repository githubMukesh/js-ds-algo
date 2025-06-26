/*
https://leetcode.com/problems/string-compression/description/
Input: chars = ["a","a","b","b","c","c","c"]
Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".


*/

const stringCompression = (chars) => {

  let output = '';
  let count = 1;

  for(let  i=0; i < chars.length; i++) {
    if(chars[i] !== chars[i+1]) {
      output += chars[i - 1] + count;
      count = 1;
    } else {
        count++;
    }
  }
  console.log('output', output);
  return output.length;
};

console.log(stringCompression(["a","a","b","b","c","c","c"])); // 6


