// Write a function isSame which accept two array and check the second array
// elements are square of first element array and frequency of values must be same.

//isSame([1,2,3],  [1,4,9]) // true
//isSame([1,2,3], [4,9]) // false

function isSame(arr1, arr2) {

    if (arr1.length !== arr2.length) {
        return false;
    }

    let firstLookUp = {};
    let secondLookUp = {};

    firstLookUp = arr1.reduce((acc, value) => {
        acc[value] = (acc[value] || 0) + 1;
        return acc;
    }, firstLookUp);

    secondLookUp = arr2.reduce((acc, value) => {
        acc[value] = (acc[value] || 0) + 1;
        return acc;
    }, secondLookUp);

    let keysOfFirstLookUp = Object.keys(firstLookUp);
    let keysOfSecondLookUp = Object.keys(secondLookUp);

    for (let i = 0; i < keysOfFirstLookUp.length; i++) {
        const key = keysOfFirstLookUp[i];
        const isElementOccurenceSame = firstLookUp[key] === secondLookUp[key * key];
        if (!isElementOccurenceSame) {
            return false;
        }
    }

    for (let i = 0; i < keysOfFirstLookUp.length; i++) {
        const valueCondition = keysOfFirstLookUp[i] === keysOfSecondLookUp[i];
        if (!valueCondition) {
            return false;
        }
        return true;
    }

}

console.log(isSame([1], [1]));
