import math


class NumArray:

    def __init__(self, nums: [int]):
        self.rangeTree = RangeTree(nums)
        # self.rangeTree.printTree()

    def update(self, index: int, val: int) -> None:
        self.rangeTree.updateNode(index, val)

    def sumRange(self, left: int, right: int) -> int:
        answer = self.rangeTree.getSumRange(left, right)
        return answer


class Node:

    def __init__(self, val, start, end):
        self.sum = val
        self.start = start
        self.end = end
        self.left = None
        self.right = None


class RangeTree:

    def __init__(self, nums):
        self.root = None
        self.createTree(nums)

    def __createTree__(self, array: list, l: int, r: int):
        if l > r:
            return None

        if l == r:
            # single value leaf node
            return Node(array[l], l, r)

        else:
            # if l<r then, there is more than 1 value. Hence split the array
            mid = math.floor((l+r)/2)
            left = self.__createTree__(array, l, mid)
            right = self.__createTree__(array, mid+1, r)

            val = 0
            if left != None:
                val += left.sum

            if right != None:
                val += right.sum

            node = Node(val, l, r)
            node.left = left
            node.right = right
            return node

    def __updateTree__(self, root: Node, index: int, val: int):
        if root == None:
            return 0

        # check if root is leaf and root is index
        if root.left == None and root.right == None:
            if root.start == index and root.end == index:
                # compute diff
                diff = val - root.sum
                root.sum = val
                return diff
            else:
                return 0

        # if root is not none, check if index falls under left or right
        mid = math.floor((root.start+root.end)/2)
        diff = 0
        if index <= mid:
            # search to the left
            diff = self.__updateTree__(root.left, index, val)
        else:
            diff = self.__updateTree__(root.right, index, val)

        root.sum += diff
        return diff

    def __getSum__(self, root: Node, start: int, end: int):
        if root == None:
            return 0

        # root completely within the range
        if (root.start >= start and root.end <= end):
            return root.sum

        sumv = 0
        mid = math.floor((root.start+root.end)/2)

        if root.start <= start <=mid:
            # traverse left to find the start sum
            newend = end if end<mid else mid
            sumv += self.__getSum__(root.left, start, newend)

        if mid+1<=end<=root.end:
            # traverse right to find the end sum
            newstart = start if start>mid+1 else mid+1
            sumv += self.__getSum__(root.right, newstart, end)

        return sumv

    def __print2DUtil(self, root:Node, space:int):
        # Base case
        if (root == None):
            return

        # Increase distance between levels
        space += 5

        # Process right child first
        self.__print2DUtil(root.right, space)

        # Print current node after space
        # count
        print()
        for _ in range(5, space):
            print(end=" ")
        print(root.sum, root.start, root.end)

        # Process left child
        self.__print2DUtil(root.left, space)


    def createTree(self, array):
        self.root = self.__createTree__(array, 0, len(array)-1)

    def updateNode(self, index: int, val: int):
        self.__updateTree__(self.root, index, val)

    def printTree(self):
        self.__print2DUtil(self.root, 0)

    def getSumRange(self, start: int, end: int):
        return self.__getSum__(self.root, start, end)


obj = NumArray([1,3,5,6,2,3,7,9,12,67,13,90])
result = obj.sumRange(0,2)

print(result)
