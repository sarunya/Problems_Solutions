# Definition for a binary tree node.
class TreeNode:
    #TODO:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def increasingBST(self, root: TreeNode) -> TreeNode:
        if root!=None:
            if root.right!=None:
                new_right = self.increasingBST(root.right)
                root.right = new_right

            if root.left!=None:
                new_root = self.increasingBST(root.left)
                new_root.right = root
                root.left = None
                return new_root
   
        
        return root
        