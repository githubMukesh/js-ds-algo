/* 
Input: "abbbcccb", k = 3
Step 1: Remove 'bbb' → "acccb"
Step 2: Remove 'ccc' → "ab"
Done.
*/

function wordCompression(word, k) {

    const stack = [];

    for(let i=0; i < word.length; i++) {
        const char = word[i];

        if(stack.length > 0 && stack[stack.length - 1][0] === char) {
            stack[stack.length - 1][1]++;
            if (stack[stack.length - 1][1] === k) {
                stack.pop(); // Remove k characters
            }
        } else {
            stack.push([char, 1]);
        }
    }
    console.log(stack);
    let result = '';
    for (let [char, count] of stack) {
        result += char.repeat(count);
    }

    return result;

}

console.log(wordCompression("abbb", 3)); // "ab"

export const wordCompression = () => {
   
    
}

wordCompression("abbbcccb", 3)