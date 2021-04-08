# https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class FindElements(object):

    def __init__(self, root):
        """
        :type root: TreeNode
        """
        self.mapping = {}
        self.root = root
        self.heal(self.root)
        
    def heal(self, root):
        if root == None:
            return
        
        if root.val == -1:
            root.val = 0
        
        self.mapping[root.val] = 1
            
        if root.left != None:
            root.left.val = (2*root.val)+1
            self.heal(root.left)
            
        if root.right != None:
            root.right.val = (2*root.val)+2
            self.heal(root.right)

    def _find(self, root, target):
        if root==None:
            return False
        
        if root.val == target:
            return True
        elif root.val > target:
            return False
        else:
            leftres = self._find(root.left, target)
            if leftres == True:
                return True
            else:
                return self._find(root.right, target)
            
        
    def find(self, target):
        """
        :type target: int
        :rtype: bool
        """
        #self._find(self.root, target)
        return (target in self.mapping)
        


# Your FindElements object will be instantiated and called as such:
# obj = FindElements(root)
# param_1 = obj.find(target)