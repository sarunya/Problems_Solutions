class MyCircularDeque:

    def __init__(self, k: int):
        """
        Initialize your data structure here. Set the size of the deque to be k.
        """
        self.size = k
        self.queue = [0]*k
        self.front = -1
        self.rear = -1
        

    def insertFront(self, value: int) -> bool:
        """
        Adds an item at the front of Deque. Return true if the operation is successful.
        """
        if self.isFull():
            return False

        if self.isEmpty():
            ##queue was empty initially
            self.front = 0
            self.rear = 0
        else:
            self.front = self.front-1 if self.front>0 else self.size-1
        
        self.queue[self.front] = value
        print(self.front, self.rear, self.queue)
        return True


    def insertLast(self, value: int) -> bool:
        """
        Adds an item at the rear of Deque. Return true if the operation is successful.
        """
        if self.isFull():
            return False

        if self.isEmpty():
            ##queue was empty initially
            self.front = 0
            self.rear = 0
        else:
            self.rear = (self.rear+1)%self.size
        
        self.queue[self.rear] = value
        print(self.front, self.rear, self.queue)
        return True
        

    def deleteFront(self) -> bool:
        """
        Deletes an item from the front of Deque. Return true if the operation is successful.
        """
        if self.isEmpty():
            return False

        if self.front==self.rear:
            self.front=-1
            self.rear=-1
        else:
            self.front = (self.front+1)%self.size

        print(self.front, self.rear, self.queue)

        return True
        

    def deleteLast(self) -> bool:
        """
        Deletes an item from the rear of Deque. Return true if the operation is successful.
        """
        if self.isEmpty():
            return False

        if self.front==self.rear:
            self.front=-1
            self.rear=-1
        else:
            self.rear = self.rear-1 if self.rear>0 else self.size-1

        print(self.front, self.rear, self.queue)

        return True


    def getFront(self) -> int:
        """
        Get the front item from the deque.
        """
        if self.isEmpty():
            return -1
        
        print(self.front, self.rear, self.queue)
        return self.queue[self.front]
        

    def getRear(self) -> int:
        """
        Get the last item from the deque.
        """
        if self.isEmpty():
            return -1
        
        print(self.front, self.rear, self.queue)
        return self.queue[self.rear]

        

    def isEmpty(self) -> bool:
        """
        Checks whether the circular deque is empty or not.
        """
        return self.front==self.rear and self.front==-1
        

    def isFull(self) -> bool:
        """
        Checks whether the circular deque is full or not.
        """
        return (self.rear+1)%self.size == self.front
        


# Your MyCircularDeque object will be instantiated and called as such:
obj = MyCircularDeque(3)
param_2 = obj.insertLast(2)
print(param_2)
param_2 = obj.insertLast(3)
print(param_2)
param_1 = obj.insertFront(1)
print(param_1)
param_2 = obj.insertLast(2)
print(param_2)
param_5 = obj.getFront()
print(param_5)
param_3 = obj.deleteLast()
print(param_3)
param_6 = obj.getRear()
print(param_6)
param_5 = obj.getFront()
print(param_5)
param_4 = obj.deleteLast()
print(param_4)
param_5 = obj.getFront()
print(param_5)
param_6 = obj.getRear()
print(param_6)
param_7 = obj.isEmpty()
print(param_7)
param_8 = obj.isFull()
print(param_8)

# 1 f:0 r:0
# 1 1 f:0 r:1