/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
  let inorderMap = _buildMap(inorder);
  return _buildTree(preorder, 0, preorder.length-1, inorder, 0, inorder.length-1, inorderMap);
};

function _buildMap(inorder) {
let inorderMap = new Map();
for(let i = 0; i<inorder.length; i++) {
  inorderMap.set(inorder[i], i);
}
return inorderMap;
}

function _buildTree(preorder, ps, pe, inorder, is, ie, inorderMap) {
  // console.log(ps, pe, is, ie);
  if(ps > pe) {
    return null;
  }

  let root = new TreeNode(preorder[ps]);

  let index = inorderMap.get(root.val);

  root.left = _buildTree(preorder, ps+1, ps+index-is, inorder, is, index-1, inorderMap);

  root.right = _buildTree(preorder, ps+index-is+1, pe, inorder, index+1, ie, inorderMap);

  return root;
}