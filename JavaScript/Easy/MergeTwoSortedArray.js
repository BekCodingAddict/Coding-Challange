// Merge Two Sorted Array
/* You are given the heads of two sorted array arr1 and arr2.
Merge the two array into one sorted array. The array should be made by splicing together the nodes of the first two array.
Return the head of the merged array.

Example 1:
Input: arr1 = [1,2,4], arr2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: arr1 = [], arr2 = []
Output: []

Example 3:
Input: arr1 = [], arr2 = [0]
Output: [0]
 
Constraints:
The number of nodes in both array is in the range [0, 50].
-100 <= Node.val <= 100
Both arr1 and arr2 are sorted in non-decreasing order. */

var mergeTwoArray = function (arr1, arr2) {
  // code here...
};

// Don't touch this code!!!
let result = mergeTwoArray([1, 2, 4], [1, 3, 4]);
result.toString() === "1,1,2,3,4,4"
  ? console.log("Case 1 Passed!")
  : console.log("Case 1 Failed!");
result = [];
result = mergeTwoArray([], [0]);
result.toString() === "0"
  ? console.log("Case 2 Passed!")
  : console.log("Case 2 Failed!");
result = [];
result = mergeTwoArray([], []);
result.toString() === ""
  ? console.log("Case 3 Passed!")
  : console.log("Case 3 Failed!");
