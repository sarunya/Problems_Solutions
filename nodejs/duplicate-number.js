/**
 * @param {number[]} nums
 * @return {number}
 */
 var findDuplicate = function(nums) {
  let sum = 0, n = nums.length;
  for(let val of nums) {
    sum += val;
  }

  let duplicateNumber = sum - ((n*(n+1))/2)

  return duplicateNumber;
};