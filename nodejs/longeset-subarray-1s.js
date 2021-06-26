/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let result =0, curStreak=0, prevStreak=0;
    
    for(let i=0; i<nums.length; i++) {
        if(nums[i]==1) {
            ++curStreak;
        } else if(i>0 && nums[i-1]==1) {
            //update prevStreak
            prevStreak = curStreak;
            curStreak = 0;
        } else {
            curStreak = 0;
            prevStreak = 0;
        }
        result = Math.max(result, curStreak+prevStreak);
    }
    if(result == nums.length) {
        --result;
    }
    return result;
};