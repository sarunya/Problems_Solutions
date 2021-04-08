/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let result = [];
    if(nums.length == 0) {
        return result;
    }
    
    let i=0;
    
    while(i<nums.length) {
        let start = nums[i]
        let val = start
        while(i<nums.length-1 && nums[i+1] == val+1) {
            ++i;
            ++val;
        }
        if(start == val) {
            result.push(""+start);
        } else {
            result.push(start+"->"+val); 
        }
        ++i;
    }
    
    return result;
    
};