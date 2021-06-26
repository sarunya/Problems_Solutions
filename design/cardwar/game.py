'''
Game and logic resides
'''

from player import Player
from deck import Deck
from gamestatus import GameStatus

class Game():

    def __init__(self):
        self.deck = Deck(1)
        self.players = []
        self.lost_players_count = 0
        self.winner = None
        self.status = GameStatus.NotStarted
        self.round = 0

    def add_player(self, player: Player):
        '''
        Adds the player to game
        '''
        self.players.append(player)


    def shuffle_and_split(self):
        '''
        This methods shuffles the deck used in game and splits the cards between the players
        '''
        self.deck.shuffle_deck()
        player_id = 0
        print("Shuffle and split cards")
        while(len(self.deck.cards) > 0):
            card = self.deck.pop_card()
            self.players[player_id].add_card(card)
            player_id = (player_id+1)%len(self.players)


    def display(self):
        '''
        Displays player information and winner information of game
        '''
        for player in self.players :
            print(player)

        if self.is_game_over() and self.status == GameStatus.GameOver:
            print(f"Game won by {self.winner.name}")



    def set_winner(self):
        '''
        Sets winner for the game
        '''
        for player in self.players :
            if len(player.cards)>0:
                self.winner = player
                self.status = GameStatus.GameOver
                break


    def increment_lost_player(self):
        '''
        increments lost player
        '''
        self.lost_players_count += 1

        if(self.is_game_over()):
            self.set_winner()


    def is_game_over(self):
        '''
        Check if all player lost except one
        '''
        return self.lost_players_count+1 == len(self.players) or self.status == GameStatus.GameOver or self.status == GameStatus.Tie


    def __check_war_conditions(self, round_cards:list):

        eligible_player_count = 0
        for player in self.players:
            # if player has cards less than equal to 7, remove player from game
            if len(player.cards)>0 and len(player.cards) <= 7 :
                print(f"{player} cannot continue playing!")
                # round_cards.extend(player.cards)
                player.cards = []

            elif len(player.cards) > 7:
                eligible_player_count += 1

        self.__update_loser()
        return eligible_player_count > 1


    def __play_active_players(self, round_cards):
        for i in range(0, len(self.players)):
            player = self.players[i]

            if(player.is_lost()==False):
                card = player.remove_card()
                # print(f"player {player.name} has drawn {card}")
                round_cards[i].append(card)

    
    def __get_round_conclusion(self, round_cards):
        try:
            lowest = None
            highest = None
            winner_index = 0
                
            for i in range(0, len(round_cards)):
                cards = round_cards[i]
                if len(cards)>0:
                    card = cards[-1]
                    lowest = card if (lowest==None or lowest.value > card.value) else lowest
                    winner_index = i if(highest==None or highest.value < card.value) else winner_index
                    highest = card if (highest==None or highest.value < card.value) else highest

            return lowest, highest, winner_index
        
        except Exception as error:
            print(round_cards)
            print(error)
            raise error
    
    def __add_cards_to_winner(self, winner_index, round_cards):
        for cards in round_cards:
            self.players[winner_index].add_card(cards)


    def __update_loser(self):
        min_lost_rank = len(self.players) - self.lost_players_count

        for player in self.players:
            if player.is_lost() and player.rank == 0:
                player.set_player_rank(min_lost_rank)
                self.increment_lost_player()
                min_lost_rank += 1


    def play_round(self):
        '''
        play one round of game
        '''
        round_cards = []
        is_round_over = False
        for _ in range(0, len(self.players)):
            round_cards.append([])

        if(self.status == GameStatus.NotStarted):
            self.status = GameStatus.Active

        self.round += 1
        print(f"----------- Starting round {self.round} ------------")

        while is_round_over == False:
            #draw cards from active players
            self.__play_active_players(round_cards)

            ##get index with highest and lowest card
            lowest, highest, winner_index = self.__get_round_conclusion(round_cards)

            if lowest != highest: 
                print(f"Winner for this round is {self.players[winner_index].name}")
                #add all cards to the deck bottom for winner
                self.__add_cards_to_winner(winner_index, round_cards)
                is_round_over = True
                self.__update_loser()
            else:
                print("Landed on war! ")
                is_round_over = not self.__check_war_conditions(round_cards)
