# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrderBottom(self, root) -> [[]]:
        result = []
        current = []
        
        queue = []
        
        if root!= None:
            queue.append(root)
            
        while len(queue)>0:
            queue.reverse()
            temp = queue
            queue = []
            current = []
            
            while len(temp)>0:
                node = temp.pop()
                current.append(node.val)
                if node.left != None:
                    queue.append(node.left)

                if node.right != None:
                    queue.append(node.right)
            
            result.append(current)
        
        result.reverse()
        return result