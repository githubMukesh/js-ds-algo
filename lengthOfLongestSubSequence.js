// https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/
/*

Convert array into a Set for lookup

set = {1,2,3,4,5,6,7,8}
Try different pairs (i, j)

Start with (1,2)
Check if 1 + 2 = 3 exists → Yes
Check if 2 + 3 = 5 exists → Yes
Check if 3 + 5 = 8 exists → Yes
Sequence found: [1,2,3,5,8] → Length 5
Other sequences:

(2,3) → [2,3,5,8] → Length 4
(3,4) → [3,4,7] → Length 3
(4,5) → [4,5,9] → No further growth
Longest sequence found:

*/

  /**
    * @param {number[]} arr
    * @return {number}
    */
  var lenLongestFibSubseq = function(arr) {
    const set = new Set(arr);
    let maxLength = 0;
    for(let i=0; i<arr.length;i++){
        for(let j=i+1; j<arr.length;j++){
            let a = arr[i], b=arr[j], length=2;
            while(set.has(a+b)){
                [a,b] = [b, a+b];
                length++;
            }

            maxLength = Math.max(maxLength, length);
        }
    }

    return maxLength>=3 ? maxLength : 0;
};