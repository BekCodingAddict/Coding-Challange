// RegEx Exercise: An empty string
/*
If you've completed this RegEx series from I to XXII then you have been exposed to all of MDN's documentation on regular expressions special characters. You can check my Collections under Basic Reg Ex in my profile if you missed any. This next part of the series is to help solidify what you've learned. In order to save time I will be searching the web to find regular expression exercises to post here.

You can test for empty string like this:

"".length === 0 ➞ true
Use a regular expression to test for an empty string.

const REGEXP = /your solution/
REGEXP.test("") ➞ true
*/

const REGEXP = / Write your solution here.../


// Don't touch this code!!!
REGEXP.test('')===true? console.log('Test Passed! Result:'+REGEXP.test("")):console.log('Test Failed! Result:'+REGEXP.test(""));
REGEXP.test('1')===false? console.log('Test Passed! Result:'+REGEXP.test("1")):console.log('Test Failed! Result:'+REGEXP.test("1"));
REGEXP.test('a')===false? console.log('Test Passed! Result:'+REGEXP.test("a")):console.log('Test Failed! Result:'+REGEXP.test("a"));