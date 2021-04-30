from controller.player import Player
from controller.diceservice import DiceService

class HumanPlayer(Player):

  RETRIES = 3

  def __init__(self, id, name)
    Player.__init__(self, id, name, False)

  def playMove(self, dice: DiceService):
    retry = HumanPlayer.RETRIES
    while val!=1 and retry > 0:
      print(f"Hi {self.name}, Please enter 1 to roll the dice")
      val = int(input())
      retry -= 1

    if val == 1:
      return Player.playMove(self.id)
    else :
      print("Try on next turn!")
      return -1