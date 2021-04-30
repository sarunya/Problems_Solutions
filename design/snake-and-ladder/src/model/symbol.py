class Symbol():

  def __init__(self):
    self.__head = None
    self.__tail = None

  def isSnake(self):
    return False

  def isLadder(self):
    return False

  def isEmpty(self):
    return False

  def setHead(self, head):
    #check if tail is in lower x value than tail
    if self.__tail != None and self.__tail[0] >= head[0]:
      print("Tail should be in position below head")
    else:
      self.__head = head

  def setTail(self, tail):
    #check if head is in higher x value than tail
    if self.__head != None and self.__head[0] <= tail[0]:
      print("Tail should be in position below head")
    else:
      self.__tail = tail

  def getHead(self):
    return self.__head

  def getTail(self):
    return self.__tail