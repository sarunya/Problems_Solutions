from controller.player import Player
from controller.diceservice import DiceService

class ComputerPlayer(Player):

  def __init__(self, id, name)
    Player.__init__(self, id, name, True)

  def playMove(self, dice: DiceService):
    return Player.playMove(dice)
