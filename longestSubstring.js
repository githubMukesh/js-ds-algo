// . Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/?envType=problem-list-v2&envId=oizxjoit


/*

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


*/

function lengthOfLongestSubstring(s) {
    let charIndexMap = new Map();
    let maxLength = 0;
    let start = 0;

    for (let end = 0; end < s.length; end++) {
        const char = s[end];

        if (charIndexMap.has(char) && charIndexMap.get(char) >= start) {
            start = charIndexMap.get(char) + 1;
        }

        charIndexMap.set(char, end);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

var res  = lengthOfLongestSubstring("abcabcbb"); // "abcabcbb" //lengthOfLongestSubstring("pwwkew");


console.log(res);



/*

https://algo.monster/liteproblems/340

Longest Substring with At Most K Distinct Characters

Input: s = "eceba", k = 2
Output: 3
Explanation: "ece" is the longest substring with 2 distinct characters.
*/

const findSubstringWithKDistinctChars = (s, k) => {
      let start = 0;
    let maxLen = 0;
    const store = new Map();

    for (let end = 0; end < s.length; end++) {
        const char = s[end];

        // Add or update frequency in the map
        store.set(char, (store.get(char) || 0) + 1);

        // Shrink window if more than k distinct characters
        console.log(store.size);
        while (store.size > k) {
            const startChar = s[start];
            store.set(startChar, store.get(startChar) - 1);

            if (store.get(startChar) === 0) {
                store.delete(startChar);
            }
            start++;
        }

        // Update max length
        maxLen = Math.max(maxLen, end - start + 1);
    }

    return maxLen;

};

console.log(findSubstringWithKDistinctChars('eceba'));