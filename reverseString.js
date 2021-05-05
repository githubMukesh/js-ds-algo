// one way to do it.
function reverse(text) {
    return text.split("").reverse().join("");
}

// Another way 

function reverse(text) {
    const length = text.length;
    let result = '';
    for (let i = length - 1; i >= 0; i--) {
        result += text[i];
    }
    return result;
}

console.log(reverse("   Hello    I am feeling great"));
