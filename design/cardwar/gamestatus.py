import enum

class GameStatus(enum.Enum):
    Active = "Active"
    NotStarted = "NotStarted"
    GameOver = "GameOver"
    Tie = "Tie"