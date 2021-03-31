def fillBoard(n):
    board = []
    for _ in range(0, n):
        row = []
        for _ in range(0, n):
            row.append(0)
        board.append(row)
    return board

def isSafeRow(board, i, n):
    # check if queen in row
    for jj in range(0, n):
        if board[i][jj] == 1:
            return False
    return True

def isSafeColumn(board, j, n):
    # check if queen in row
    for ii in range(0, n):
        if board[ii][j] == 1:
            return False
    return True

def isSafePlace(board, i, j, n):
    # check if queen in row
    if not isSafeRow(board, i, n):
      return False

    # check if queen in column
    if not isSafeColumn(board, j, n):
      return False

    # check upper diagonal
    ii = i-1
    jj = 1
    while ii >= 0:
        if j+jj < n and board[ii][j+jj] == 1:
            return False
        if j-jj >= 0 and board[ii][j-jj] == 1:
            return False
        jj += 1
        ii -= 1

    # check lower diagonal
    ii = i+1
    jj = 1
    while ii < n:
        if j+jj < n and board[ii][j+jj] == 1:
            return False
        if j-jj >= 0 and board[ii][j-jj] == 1:
            return False
        jj += 1
        ii += 1

    return True


def solveNQueens(board, n, queens):
    if queens == 0:
        return True
    for i in range(n-queens, n):
        if not isSafeRow(board, i, n):
          continue
        for j in range(0, n):
            if board[i][j] != 1 and isSafePlace(board, i, j, n) is True:
                board[i][j] = 1
                if solveNQueens(board, n, queens-1) is True:
                    return True
                board[i][j] = 0

    return False

def printBoard(board, n, count):
    # print(f'=================================Printing Board {count}=================================')
    for row in board:
        print(" ".join([str(elem) for elem in row]))

n = int(input())
board = fillBoard(n)
if solveNQueens(board, n, n) is True:
  print("YES")
  printBoard(board, n, 0)
else:
  print("NO")

list.reverse()
