// Valid Parentheses
/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 
Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false
 

Constraints:
1 <= s.length <= 104
s consists of parentheses only '()[]{}' */

var isValid = function (s) {

};

// Don't touch this code!!!
isValid('()')===true? console.log('Case1 Passed! Result: '+isValid('()')):console.log('Case1 Failed! Result: '+isValid('()'));
isValid('()[]{}')===true? console.log('Case2 Passed! Result: '+isValid('()[]{}')):console.log('Case2 Failed! Result: '+isValid('()[]{}'));
isValid('(]')===false? console.log('Case3 Passed! Result: '+isValid('(]')):console.log('Case3 Failed! Result: '+isValid('(]'));
isValid('([)]')===false? console.log('Case4 Passed! Result: '+isValid('([)]')):console.log('Case4 Failed! Result: '+isValid('([)]'));