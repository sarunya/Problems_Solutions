'''
Represents the actor Player and their actions as methods
'''

from card import Card

class Player():

   def __init__(self, name):
      self.name = name
      self.cards = []
      self.rank = 0


   def __str__(self):
      if(self.rank==0):
         return f"Player {self.name} with {len(self.cards)} cards"
      else:
         return f"Player {self.name} won with place {self.rank}"


   def add_card(self, cards: Card):
      '''
      Adds one/list of card to player's deck to bottom (right)
      '''
      
      if type(cards) == type([]):
         #For list of cards
         self.cards.extend(cards)
      else:
         #For single card
         self.cards.append(cards)


   def remove_card(self)->Card:
      '''
      Removes and return one card from player's deck from left(top)
      '''
      return self.cards.pop(0)

   
   def is_lost(self)->bool:
      '''
      Checks if player is left with no cards
      '''
      return len(self.cards) == 0

   
   def set_player_rank(self, rank):
      '''
      Sets player's rank in the game
      '''
      self.rank = rank