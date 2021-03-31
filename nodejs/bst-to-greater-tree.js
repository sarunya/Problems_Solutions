//https://leetcode.com/problems/convert-bst-to-greater-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var convertBST = function(root) {
    
  _convert(root, 0);
  return root;
};
var _convert = function(root, sum) {
  if(root==null) {
      return sum;
  }  else {
      sum = _convert(root.right, sum);
      root.val =  sum + root.val;
      sum = root.val;
      return _convert(root.left, sum);
      
  }
}