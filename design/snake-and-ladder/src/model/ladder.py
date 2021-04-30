from model.symbol import Symbol

class Ladder(Symbol):

  def __init__(self):
    Symbol.__init__(self)

  def isLadder(self):
    return True