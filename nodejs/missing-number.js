/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum = 0, n = nums.length;
    for(let val of nums) {
      sum += val;
    }

    let missingNumber = ((n*(n+1))/2) - sum;
    return missingNumber;
};

console.log(missingNumber([3,1,2]));