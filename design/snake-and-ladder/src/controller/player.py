from controller.diceservice import DiceService

class Player():

  def __init__(self, id, name, isComputed):
    self.id = id
    self.name = name
    self.playerPostion = (0,0)
    self.isComputer = isComputed

  def getName(self):
    return self.name

  def isComputerPlayer(self):
    return self.isComputer
  
  def setPlayerPosition(self, position):
    self.playerPostion = position
  
  def getPlayerPosition(self):
    return self.playerPostion

  def playMove(self, dice: DiceService):
    rolledVal = dice.roll()
    print(f"Hey {player.name}, you have rolled {rolledVal}!")
    return rolledVal