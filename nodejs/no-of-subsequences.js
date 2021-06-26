/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
  nums.sort((a,b)=>a-b);

  let preCompute = [BigInt(1)], mod = BigInt(Math.pow(10, 9) + 7);
  for(let i=1; i<nums.length; i++) {
    preCompute[i] = (BigInt(preCompute[i-1])*BigInt(2)) % mod;
  }
  
  let i=0, j=nums.length-1, count=BigInt(0);

  while(i<=j) {
    if(nums[i]+nums[j]>target) {
      --j;
    } else {
      count += preCompute[j-i];
      ++i;
    }
  }

  return count
};


// 3,5,6,7

// 3 