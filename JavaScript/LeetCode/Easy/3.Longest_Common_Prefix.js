// Longest Common Prefix
/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters. */

var longestCommonPrefix = function(strs) {
    
};


// Don't touch this code!!!
longestCommonPrefix(["flower","flow","flight"])==='fl'? console.log('Test Passed! Result: '+longestCommonPrefix(["flower","flow","flight"])):
console.log('Test Failed! Result: '+longestCommonPrefix(["flower","flow","flight"]));
longestCommonPrefix( ["dog","racecar","car"])===''? console.log('Test Passed! Result: '+longestCommonPrefix( ["dog","racecar","car"])):
console.log('Test Failed! Result: '+longestCommonPrefix( ["dog","racecar","car"]));