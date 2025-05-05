// https://leetcode.com/problems/longest-consecutive-sequence/description/?envType=problem-list-v2&envId=oizxjoit

/*

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
Example 3:

Input: nums = [1,0,1,2]
Output: 3


*/

const findLongestConsecutiveSequence = (nums) => {
  if(nums.length === 0) return 0;

    nums.sort((a, b) => a - b);

   let longestStreak = 1;
   let currentStreak = 1;

   for(let i=0; i< nums.length ; i++){
    if(nums[i] === nums[i-1]) {
        continue;
    }

    if(nums[i] === nums[i-1] + 1){
        currentStreak++;
    }else{
        currentStreak = 1;
    }

    longestStreak = Math.max(longestStreak, currentStreak); 
   }



    return longestStreak;

};

const nums = [100, 100, 200, 1, 3, 2];
const result = findLongestConsecutiveSequence(nums);
console.log(result);

