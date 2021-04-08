//https://leetcode.com/problems/array-nesting/submissions/
/**
 * @param {number[]} nums
 * @return {number}
 */
function dfsPathLen(nums, i, visited) {
    if(visited[i]) {
        return 0;
    } else {
        visited[i] = true;
        return 1+dfsPathLen(nums, nums[i], visited);
    }
}

var arrayNesting = function(nums) {
    let ans = 0;
    let visited = [];
    for(let i=0; i<nums.length; i++) {
        if(!visited[i]) {
            let len = dfsPathLen(nums, i, visited);
            ans = Math.max(ans, len);
        }
    }
    return ans;
};