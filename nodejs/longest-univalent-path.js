/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
//TODO:
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var longestUnivaluePath = function(root) {
    
};


function loopWrapper(root) {
  let answer = 0;

  function dfs(root) {
    if(root == null) {
      return 0;
    }
    let currentAns = 1;
    //if leaf
    if(root.left == null && root.right == null) {
      return currentAns;
    }
    
    let leftVal = dfs(root.left);
    let rightVal = dfs(root.right);

    //if current root is not part of path between left and right
    if(!root.left || !root.right || root.left.val != root.right.val) {
      //currentAns = 
    }

  }
}