'''
This is a class which describes a card of a deck
    hearts2 = Card("Hearts", "Jack")
    print(hearts2) 
'''

from cardrank import CardRank

class Card():

    def __init__(self, symbol, rank):
        self.symbol = symbol
        self.rank = rank
        self.value = CardRank[rank].value

    def __str__(self):
        return f"{self.symbol} {self.rank} card"

