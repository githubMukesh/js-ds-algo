// Sliding Window: First negative number in every window

/*

Input: arr= [12, -1, -7, 8, -15, 30, 16, 28], k = 3
Output: [-1, -1, -7, -15, -15, 0]
Explanation: For every window, the first negative number is captured and put into a new array

*/

const firstNegativeNumber = (arr, k) => { 
    const result = [];
    const negIndices = []; // Deque to store indices of negative numbers

    for (let right = 0; right < arr.length; right++) {
        // Add current element to deque if negative
        if (arr[right] < 0) negIndices.push(right);

        // Remove elements outside the current window from the front
        console.log('negIndices', negIndices, right -k);
        while (negIndices.length > 0 && negIndices[0] <= right - k) {
            negIndices.shift();
        }

        // If the window is fully formed (right >= k-1), record the result
        if (right >= k - 1) {
            result.push(negIndices.length > 0 ? arr[negIndices[0]] : 0);
        }
    }
    return result;
};

console.log(firstNegativeNumber([12, -1, -7, 8, -15, 30, 16, 28], 3)); // Output: [-1, -1, -7, -15, -15, 0]
