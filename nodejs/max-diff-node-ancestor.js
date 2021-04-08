//https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findDiff = function(root, max, min, diff) {
    if(root && Math.abs(root.val - max) > diff) {
        diff = Math.abs(root.val - max);
    }
    if(root && Math.abs(root.val - min) > diff) {
        diff = Math.abs(root.val - min);
    }
    if(root && root.val > max) {
        max = root.val;
    }
    if(root && root.val < min) {
        min = root.val;
    }
    
    let leftval, rightval, result={max, min, diff};
    // console.log("root", result, root);
    if(root && root.left) {
        leftval = findDiff(root.left, max, min, diff);
        // console.log("leftval", leftval);
    }
    
    if(root && root.right) {
        rightval = findDiff(root.right, max, min, diff);
        // console.log("rightval", rightval);
    }
    
    if(leftval) {
        result.max = (result.max < leftval.max) ? leftval.max : result.max;
        result.min = (result.min > leftval.min) ? leftval.min : result.min;
        result.diff = (result.diff < leftval.diff) ? leftval.diff : result.diff;
    }
    
    if(rightval) {
        result.max = (result.max < rightval.max) ? rightval.max : result.max;
        result.min = (result.min > rightval.min) ? rightval.min : result.min;
        result.diff = (result.diff < rightval.diff) ? rightval.diff : result.diff;
    }
    
    return result;
}

var maxAncestorDiff = function(root) {
    let result = findDiff(root, root.val, root.val, -1);
    console.log(result)
    return result.diff;
};