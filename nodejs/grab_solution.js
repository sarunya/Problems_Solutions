/*
A certain bug's home is on the x-axis at position x.
Help them get there from position 0.
The bug jumps according to the following rules:
- It can jump exactly a positions forward (to the right).
- It can jump exactly b positions backward (to the left).
- It cannot jump backward twice in a row.
- It cannot jump to any forbidden positions.

The bug may jump forward beyond its home, but it cannot jump to positions numbered with negative integers.
Given an array of integers forbidden, where forbidden[i] means that the bug cannot jump to the position forbidden[i],
and integers a, b, and x, return the minimum number of jumps needed for the bug to reach its home.
If there is no possible sequence of jumps that lands the bug on position x, return -1.

Constraints:
1 <= forbidden.length <= 1000
1 <= a, b, forbidden[i] <= 2000
0 <= x <= 2000
All the elements in forbidden are distinct.
Position x is not forbidden.
Example 1:
Input: forbidden = [14,4,18,1,15], a = 3, b = 15, x = 9
Output: 3
Explanation: 3 jumps forward (0 -> 3 -> 6 -> 9) will get the bug home.

Example 2:
Input: forbidden = [8,3,16,6,12,20], a = 15, b = 13, x = 11
Output: -1

Example 3:
Input: forbidden = [1,6,2,14,5,17,4], a = 16, b = 9, x = 7
Output: 2
Explanation: One jump forward (0 -> 16) then one jump backward (16 -> 7) will get the bug home.

Example 4:
Input: forbidden = [1,2,3,5,6,7,9,10], a = 4, b = 5, x = 13
**********************************************************************************/

let visitedHash = {};

/**
 *
 *
 * @param {*} initial
 * @param {*} x
 * @param {*} a
 * @param {*} b
 * @param {*} forbidden
 * @param {*} isForward 1 -> moving forward in prev step, 0 -> moving backward
 * @returns
 */
let MAX_VALUE = Math.pow(2, 32);

function getMinJumps(initial, x, a, b, forbidden, isForward) {
  if(initial == x) {
    return 0;
  } else if(initial<0 || initial >= x+(2*a)+(2*b)) {
    return MAX_VALUE;
  }

  if(forbidden.indexOf(initial)>=0) {
    return MAX_VALUE;
  } 

  if(visitedHash[`${initial}#${isForward}`]) {
    return MAX_VALUE;
  }

  let minJump = MAX_VALUE;
  visitedHash[`${initial}#${isForward}`] = true;
  if(isForward==1) {
    minJump = Math.min(getMinJumps(initial-b, x, a, b, forbidden, 0)+1, minJump);
  }
  minJump = Math.min(getMinJumps(initial+a, x, a, b, forbidden, 1)+1, minJump);

  return minJump;
}

let forbidden = [1,2,3,5,6,7,9,10], a = 4, b = 5, x = 13;

let result = getMinJumps(0, x, a, b, forbidden, 1);
result = (result==MAX_VALUE) ? -1 : result
console.log(result);
