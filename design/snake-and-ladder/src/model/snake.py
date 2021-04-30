from model.symbol import Symbol

class Snake(Symbol):

  def __init__(self):
    Symbol.__init__(self)

  def isEmpty(self):
    return True