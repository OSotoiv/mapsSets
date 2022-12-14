// Maps and Sets Exercise
// Quick Question #1
// What does the following code return?
new Set([1, 1, 2, 2, 3, 4]);
//a new set filled with the given array and duplicate values removed. [1,2,3,4]


// Quick Question #2
// What does the following code return?
[...new Set("referee")].join("");
//a new set with each letter in the string as a value and duplicates removed. [r,e,f]
//then join will turn the set back into a string... 'ref'



// Quick Questions #3
// What does the Map m look like after running the following code?
let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);
//{[1,2,3]: true,
// [1,2,3]: false}
//map does not care if two arrays exits with the same values. arrays are reference types in javascript

// hasDuplicate
// Write a function called hasDuplicate which accepts an array 
// and returns true or false if that array contains a duplicate
const hasDuplicate = (arr) => arr.length !== new Set(arr).size;
hasDuplicate([1, 3, 2, 1]) // true
hasDuplicate([1, 5, -1, 4]) // false

// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers 
//and the values are the count of the vowels in the string.
function vowelCount(str) {
    const lilChars = [...str].map(char => char.toLowerCase()).join("");
    vowels = 'aeiou';
    vowelMap = new Map();
    for (let char of lilChars) {
        if (vowels.includes(char)) {
            vowelMap.has(char) ?
                vowelMap.set(char, vowelMap.get(char) + 1) :
                vowelMap.set(char, 1)
        };
    }
    return vowelMap;
}
vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }