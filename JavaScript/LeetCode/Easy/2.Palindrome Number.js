/* 
9. Palindrome Number
Difficulty: Easy

Hint
Given an integer x, return true if x is a 
palindrome
, and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 
Constraints:

-231 <= x <= 231 - 1
*/

var isPalindrome = function(x) {
   
};

// Don't forget your return 

// Don't touch this code!!!
isPalindrome(121)===true? console.log('Test Passed! Result:'+isPalindrome(121)):console.log('Test Failed! Result:'+isPalindrome(121));
isPalindrome(-121)==false? console.log('Test Passed! Result:'+isPalindrome(-121)):console.log('Test Failed! Result:'+isPalindrome(-121));
isPalindrome(10)===false? console.log('Test Passed! Result:'+isPalindrome(10)):console.log('Test Failed! Result:'+isPalindrome(10));