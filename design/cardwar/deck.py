'''
This support deck of 52 cards
'''
from card import Card
from cardrank import CardRank
from cardsymbols import CardSymbols

import random

class Deck():

     def __init__(self, id):
          self.id = id
          self.cards = []
          self.__create_deck()


     def __create_deck(self):
          '''
          Starts with an empty deck and adds 52 cards to deck
          '''
          self.cards = []

          for symbol in CardSymbols:
               for rank in CardRank:
                    self.cards.append(Card(symbol.name, rank.name))


     def shuffle_deck(self):
          '''
          Shuffles the deck of cards
          '''
          random.shuffle(self.cards)


     def pop_card(self)->Card:
          '''
          Remove and retuns the first card from deck stack
          '''
          return self.cards.pop()


deck = Deck(1)






     