from model.snakeladderboard import SnakeAndLadderBoard 
from controller.diceservice import DiceService
from model.gamestatus import GameStatus
from controller.player import Player
from model.symbol import Symbol

class SnakeLadderGame():

  def __init__(self, snakeladderboard:SnakeAndLadderBoard, dice: DiceService):
    self.players = []
    self.status = GameStatus.NotStarted
    self.currentPlayer = 1
    self.snakeLadderBoard = snakeladderboard
    self.dice = dice
    self.winner = None


  def addPlayer(self, player: Player):

    if len(self.players) == self.noOfPlayers:
      print("No more players can be added to game")
    else:
      self.players.append(player)

  def startGame(self):
    if self.status == GameStatus.NotStarted:
      self.__setGameStatus(GameStatus.InProgress)
    else:
      print(f"Game is in {self.status} status")


  def play(self, playerId: int):
    if self.status != GameStatus.InProgress:
      print(f"Game is in {self.status} status")
      return

    if playerId <=0 or playerId > len(self.players) or self.currentPlayer!=playerId:
      print(f"{self.currentPlayer} should play the game now")
    else:
      player = self.players[self.currentPlayer-1]
      self.__playGame(player)
      self.__updateNextPlayer()


  def __updateNextPlayer(self):
    self.currentPlayer = (self.currentPlayer+1)%len(self.players)
    self.currentPlayer += 1

  def __movePlayerPosition(self, player: Player, rolledVal: int):

    x, y = player.getPlayerPosition()
    newposition = SnakeLadderGame._getNextPosition(x, y, rolledVal)
    x1, y1 = self.__checkSymbol(newposition)
    size = self.snakeLadderBoard.getSize()-1

    if x1 == size:
      print("Move not possible, try in next turn")
    else :
      player.setPlayerPosition((x1, y1))
      print(f"Player moved from ${x} {y} to position ${x1} {y1}")
    
    if x1 == size-1 and y1==size-1:
      print(f"Player {player.getName()} won")
      self.__setWinner(player)
      self.__setGameStatus(GameStatus.Completed)

  def __checkSymbol(self, position):
    symbol = self.snakeLadderBoard._getSymbolFromPosition(position)

    if symbol.isSnake() and symbol.getHead()==position:
      return symbol.getTail()
    elif symbol.isLadder() and symbol.getTail()==position:
      return symbol.getHead()
    else :
      return position

  def __setGameStatus(self, status):
    self.status = status

  def __setWinner(self, winner):
    self.winner = winner

  @staticmethod
  def _getNextPosition(self, x, y, rolledVal):

    size = self.snakeLadderBoard.getSize()

    if(x%2==0):
      #move forward
      if size < y+rolledVal :
        rolledVal -= size-y
        y = size-1
        x += 1
        return SnakeLadderGame._getNextPosition(x, y, rolledVal)
      else :
        return (x, y+rolledVal)
    else:
      #move backward
      if y-rolledVal <=0 :
        rolledVal -= y
        y = 0
        x += 1
        return SnakeLadderGame._getNextPosition(x, y, rolledVal)
      else :
        return (x, y-rolledVal)


  def __playGame(self, player: Player):

    #roll the dice
    rolledVal = player.playMove(dice)

    if rolledVal == -1:
      return

    #check if rolled value is greater 
    self.__movePlayerPosition(player, rolledVal)
