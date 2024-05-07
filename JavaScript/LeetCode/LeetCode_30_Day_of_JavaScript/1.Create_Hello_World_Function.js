// Create Hello World Function
/* Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 

Example 1:

Input: args = []
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f(); // "Hello World"

The function returned by createHelloWorld should always return "Hello World".
Example 2:

Input: args = [{},null,42]
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f({}, null, 42); // "Hello World"

Any arguments could be passed to the function but it should still always return "Hello World".
 
Constraints:

0 <= args.length <= 10 */

var createHelloWorld = function() {
    return function(...args) {
        
    }
};

/*
 * const f = createHelloWorld();
 * f(); // "Hello World"
 * 
  Don't touch this code!!! */

  const f=createHelloWorld();
  f()==='Hello World'? console.log('Case 1 Passed! Result: '+f()): console.log('Case 1 Failed! Result: '+f());
  f('{},null,42')==='Hello World'? console.log('Case 2 Passed! Result: '+f('{},null,42')): console.log('Case 2 Failed! Result: '+f('{},null,42'));