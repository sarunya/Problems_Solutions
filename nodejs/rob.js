/**
 * @param {number[]} nums
 * @return {number}
*/
var rob = function (nums) {
  let n = nums.length;
  let dp = new Array(n).fill(0) ;
  dp[n-1] = nums[n-1];
  dp[n-2] = Math.max(nums[n-2], nums[n-1]);

  for(let i=n-3; i>=0; i--) {
    dp[i] = Math.max(nums[index] + dp[i + 2], dp[i+1]);
  }
  console.log(dp);
  return dp[0];
};

var rob = function (nums) {
  if(nums.length==1) {
      return nums[0];
  }
  let n = nums.length;
  let lastp2 = nums[n-1];
  let lastp1 = Math.max(nums[n-2], nums[n-1]);

  for(let i=n-3; i>=0; i--) {
    let last = Math.max(nums[i] + lastp2, lastp1);
    lastp2 = lastp1;
    lastp1 = last;
  }
  // console.log(dp);
  return lastp1;
};

/**
 * @param {number[]} nums
 * @return {number}
*/
// var rob = function(nums) {
//     return _rob(nums, 0);
// };

// function _rob(nums, index) {
//   if(index>=nums.length) {
//     return 0;
//   }
//   return Math.max(nums[index]+_rob(nums, index+2), _rob(nums, index+1));
// }


// /**
//  * @param {number[]} nums
//  * @return {number}
// */
// var rob = function(nums) {
//   let dp = [];
//   let ans = _rob(nums, 0, dp);
//   console.log(dp);
//   return ans;
// };

// function _rob(nums, index, dp) {
// if(index>=nums.length) {
//   return 0;
// }
// if(dp[index]!=undefined) {
//     return dp[index];
// }
// dp[index] = Math.max(nums[index]+_rob(nums, index+2, dp), _rob(nums, index+1, dp)); 
// return dp[index];
// }