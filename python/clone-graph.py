"""
# Definition for a Node.
class Node(object):
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""
class Solution(object):
    
    def _clone(self, node, visited):
        """
        :type node: Node
        :rtype: Node
        """
        newNode = None
        
        if (node!=None):
            #get all neighbors
            if node.val in visited:
                return visited[node.val]
            
            newNode = Node(node.val)
            visited[node.val] = newNode
            newNeighbors = []
            
            for neighbor in node.neighbors:
                newNeighbors.append(self._clone(neighbor, visited))
            
            newNode.neighbors = newNeighbors
            
        return newNode
            
    def cloneGraph(self, node):
        """
        :type node: Node
        :rtype: Node
        """
        
        visited = {}
        return self._clone(node, visited)
        