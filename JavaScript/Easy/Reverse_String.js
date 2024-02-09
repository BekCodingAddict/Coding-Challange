/*
Write a function called reverseString that takes a string as input and returns the reverse of that string.

Example:

javascript
Copy code
reverseString("hello"); // Output: "olleh"
reverseString("JavaScript"); // Output: "tpircSavaJ"
reverseString(""); // Output: ""

Your task is to implement the reverseString Class and return by makeRevers() method in JavaScript.
*/

class reverseString{
    
    makeReverse(){

    }
}

// Don't touch this code!!!
const Obj=new reverseString('hello'); 
Obj.makeReverse()==='olleh'? console.log('Case 1 Passed! Result: '+Obj.makeReverse()):
console.log('Case 1 Failed! Result: '+Obj.makeReverse());
const Obj2=new reverseString('JavaScript');
Obj2.makeReverse()==='tpircSavaJ'? console.log('Case 1 Passed! Result: '+Obj2.makeReverse()):
console.log('Case 1 Failed! Result: '+Obj2.makeReverse());
const Obj3=new reverseString('');
Obj3.makeReverse()===''? console.log('Case 1 Passed! Result: '+Obj3.makeReverse()):
console.log('Case 1 Failed! Result: '+Obj3.makeReverse());