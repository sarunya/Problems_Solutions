# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isLeaf(self, node) -> bool:
        '''
        Checks if given node is leaf node
        '''
        return node.left==None and node.right==None

    def sumOfLeftLeaves(self, root) -> int:
        '''
        Gets sum of left leaves
        '''
        sumv = 0

        if root!=None and root.left!=None:
            sumv += self.sumOfLeftLeaves(root.left)
        
        
        if root!=None and root.left!=None and self.isLeaf(root.left):
            sumv += root.left.val
        

        if root!=None and root.right!=None:
            sumv += self.sumOfLeftLeaves(root.right)
        
        return sumv