from model.ladder import Ladder
from model.snake import Snake
from model.player import Player 
from model.symbol import Symbol
from model.empty import Empty


class SnakeAndLadderBoard():

  def __init__(self, size):
    self.snakes = []
    self.ladders = []
    self.size = size
    self.board = [[Empty()]*size]*size

  def getSize():
    return self.size

  def addSnake(self, snake: Snake):
    if self.__addSymbol(symbol) == True:
      self.snakes.append(snake)

  def addLadder(self, ladder: Ladder):
    if self.__addSymbol(symbol) == True:
      self.ladders.append(ladder)

  def __addSymbol(self, symbol: Symbol):
    #check if this position is already occupied
    head = symbol.getHead()
    tail = symbol.getTail()
    if self.__canOccupy(head) == False or self.__canOccupy(tail) == False :
      print("Not possible to add symbol to the board")
      return False
    else :
      self.board[headx][heady] = symbol
      self.board[tailx][taily] = symbol
      return True

  def _getSymbolFromPosition(self, position) -> Symbol:
    x,y = position
    return self.board[x][y]

  def __canOccupy(self, position):
    x,y = position
    return not (x<0 or y<0 or x>self.size-1 or y>self.size-1 or self.board[x][y] != 0)

  
