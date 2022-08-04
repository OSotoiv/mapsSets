// What does the following code return?
new Set([1, 1, 2, 2, 3, 4]);
//[1,2,3,4]

// What does the following code return?
[...new Set("referee")].join("")
//you will get back a string of the contence of referee without any duplication of values. 

// What does the Map m look like after running the following code?
let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);
//you get a