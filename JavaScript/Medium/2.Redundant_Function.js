// Write a function redundant that takes in a string str and returns a function that returns str.
//Examples
// const f1 = redundant("apple")
// f1() ➞ "apple"
// const f2 = redundant("pear")
// f2() ➞ "pear"
// const f3 = redundant("")
// f3() ➞ ""
// Your function should return a function, not a string.

function redundant(str) {

}

//If you solve the problem result will be print on you terminal

// Don't touch this code!!!
const f1 = redundant('apple'); f1() === "apple" ? console.log("Test Passed! : Value==" + f1()) : console.log("Test Failed! : Value==" + f1());
const f2 = redundant('pear'); f2() === "pear" ? console.log("Test Passed! : Value==" + f2()) : console.log("Test Failed! : Value==" + f2());
const f3 = redundant(''); f3() === "" ? console.log("Test Passed! : Value==" + f3()) : console.log("Test Failed! : Value==" + f3());