class Solution:

    def __isValid(self, board, indexi, indexj, value) -> bool:
        '''
        Checks if a solution is possible by placing value in given index
        '''
        for i in range(0, 9):
            # print("for i j", indexi, indexj, value)
            if board[i][indexj] == value or board[indexi][i] == value:
                return False
            r = 3 * (indexi//3) + (i//3)
            c = 3 * (indexj//3) + (i%3)
            # print(r, c, value)
            if board[r][c] == value:
                return False
        return True

    def __solveSudoku(self, board:[[]]) -> bool:
        for i in range(0, 9):
            for j in range(0, 9):
                # print(board[i][j], board[i][j ]=='.')
                if board[i][j]=='.': 
                    for k in range(1, 10):
                        ks = str(k)
                        if self.__isValid(board, i, j, ks):
                            board[i][j] = ks
                            if(self.__solveSudoku(board) == True):
                                return True
                            board[i][j] = '.'
                    return False

        return True

                

    def solveSudoku(self, board: [[]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        # print(columns)
        self.__solveSudoku(board)