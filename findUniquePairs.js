/*  

let arr = [1,5,2,2,2,5,5,4];
k = 3

output = [ [1,2],[2,5],[1,4] ]

https://leetcode.com/problems/find-all-unique-pairs/description/
Given an array of integers and a target integer k, find all unique pairs (a,b) such that a + b = k or a - b = k.
The pairs should be unique and in ascending order.
 
k - b = a
k + b = a;

*/

function findUniquePairs(arr, k) { 
  
    let paris = [];

    const seen = new Set(arr);

    for (let i = 0; i < arr.length; i++) { 

        const complement  = k - arr[i];
        const addition = k + arr[i];
        if((seen.has(complement) && complement !== arr[i])) {
            const pair = [arr[i], complement].sort((a, b) => a - b);
            paris.push(pair);
        }
        if(seen.has(addition) && addition !== arr[i]) {
            const pair = [arr[i], addition].sort((a, b) => a - b);
            if(!paris.some(p => p[0] === pair[0] && p[1] === pair[1])) {
                paris.push(pair);
            }
        }
    }
    return paris;   
    };

    console.log(findUniquePairs([1,5,2,2,2,5,5,4], 3)); // [ [1,2],[2,5],[1,4] ]