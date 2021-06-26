'''
This implement and play the game
'''

from game import Game
from player import Player

class GameDemo():

    def __init__(self):
        self.game = Game()

    def __create_players(self, no_of_players: int):
        '''
        Gets name from players and adds to Game
        '''
        for i in range(0, no_of_players):
            player = Player(input(f"Enter name for player {i+1}"))
            self.game.add_player(player)
            

    def create_game(self, no_of_players: int):
        '''
        Creates a game of players
        '''
        if no_of_players <= 1 or no_of_players > 8:
            print("no of players should be greater than 0 and less than 8")
            return
        
        ##create players and add to game
        self.__create_players(no_of_players)

        ##shuffle cards and distribute to players
        self.game.shuffle_and_split()


    def play_game(self):
        print("Start game")
        while self.game.is_game_over()==False and self.game.round < 5000:
            self.game.play_round()
            # self.game.display()
        self.game.display()

    


gamedemo = GameDemo()
gamedemo.create_game(7)
gamedemo.play_game()

        