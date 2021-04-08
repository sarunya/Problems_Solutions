/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b) => {
        return a-b;
    });
    let i=0, j=1, min=1000000000, result;
    
    while(i<nums.length) {
        let j = i+1;
        let k = nums.length-1;
        
        while(j<k) {
            let sum = nums[i]+nums[j]+nums[k];
            
            if(Math.abs(sum-target) < Math.abs(min)) {
                min = target - sum;
                result = sum;
            }
            
            
            if(sum < target) {
                ++j;
            } else {
                --k;
            }
            
            if(min == 0){
                break;
            }
        }
        ++i;
    }
    return result;
};