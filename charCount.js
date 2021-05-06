// Count the number of characeter occurence in a string.

// Input - aaaa
// Output - a:4

// input - "my phone number is 182763"

function countCharacter(text) {
    if (typeof text !== 'string') {
        throw new Error('Invalid input');
    }
    let lookUp = {};
    for (let i = 0; i < text.length; i++) {
        lookUp[text[i]] = (lookUp[text[i]] || 0) + 1;
    }
    return lookUp;
}

console.log(countCharacter('my phone number is 182763'));


