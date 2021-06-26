class Solution:
    def lastStoneWeight(self, stones: []) -> int:
        self.stones = stones
        self.length = len(self.stones)
        self.heapSort()

        # run a loop till lenght of self.stones is 1 or 0
        while len(self.stones) > 1:
            # take one value from front and heapify
            val1 = self.topAndHeapify()
            # take another value from front and heapify
            val2 = self.topAndHeapify()
            # add one value to last and heapfiy
            if(val1-val2>0):
                self.addAndHeapify(val1-val2)
            print(self.stones)


    def addAndHeapify(self, val) -> int:

        # push value to last
        self.stones.append(val)
        self.length += 1

        #heapify parent index
        self.insertHeapify(self.length-1)
        

    def insertHeapify(self, index):
        parentIndex = int((index-1)/2)

        if parentIndex>=0 and self.stones[parentIndex] < self.stones[index]:
            self.swap(parentIndex, index)
            self.insertHeapify(parentIndex)


    def swap(self, ai, bi):

        temp = self.stones[ai]
        self.stones[ai] = self.stones[bi]
        self.stones[bi] = temp



    def topAndHeapify(self) -> int:

        # replace value from 1st to last
        self.swap(0, self.length-1)

        topv = self.stones.pop()
        self.length -= 1
        self.heapify(0)
        return topv


    def heapSort(self):
        lastParent = int(self.length/2)

        for i in range(0, lastParent)[::-1]:
            self.heapify(i)


    def heapify(self, index: int):
        '''
        check if children of self.stones are with lesser values
        '''

        left = (2*index)+1
        right = (2*index)+2
        maxindex = index

        if(left < self.length and self.stones[left] > self.stones[maxindex]):
            maxindex = left

        if(right < self.length and self.stones[right] > self.stones[maxindex]):
            maxindex = right

        if (maxindex != index):
            # swap index with maxindex
            self.swap(index, maxindex)
            # call heapify recursively
            self.heapify(maxindex)


# [2,1,5,3,1]

#     5
#   1   2
# 3   1
