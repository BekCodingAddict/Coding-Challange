import { Compare, external } from "./Debugger.js";
/*This is an introduction to how challenges work. In the Code tab above
 you'll see a starter function that looks like this:*/

 function HelloWorld(){

    
 }

 /*All you have to do is type return "Hello World" between the curly 
 braces { } and then click the Check button. If you did this correctly, 
 the button will turn red and say SUBMIT FINAL. Click it and see what happens.
 
 NOTE:
   - The returned string must be in all lowercase letters.
 */
Compare(HelloWorld(),external)===true? console.log('Result: Passed!'): console.log('Result: Failed!');

export {HelloWorld};