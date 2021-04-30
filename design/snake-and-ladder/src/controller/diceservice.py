import random

class DiceService():
  
  def __init__(self, faces):
    self.faces = faces

  def roll(self):
    return random.randint(1, self.faces)