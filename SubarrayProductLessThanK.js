//  https://leetcode.com/problems/subarray-product-less-than-k/description/
// Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.

const numSubarrayProductLessThanK = (nums, k) => { 
    if (k <= 1) return 0; // If k is less than or equal to 1, no subarray can have a product less than k

    let product = 1;
    let left = 0;
    let count = 0;

    for (let right = 0; right < nums.length; right++) {
        product *= nums[right];

        while (product >= k) {
            product /= nums[left];
            left++;
        }

        count += right - left + 1; // All subarrays ending at 'right' and starting from 'left' to 'right'
    }

    return count;
}

// Example usage:
console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100)); // Output: 8