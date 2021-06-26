class Solution:
    def generateParenthesis(self, n: int) -> [str]:
        current = [0]*(2*n)
        result = []

        self.__generate(current, n, 0, 0, result)

        return result

    def __generate(self, current:list, n:int, open:int, close:int, result:list):
        if 2*n==open+close:
            result.append("".join([str(elem) for elem in current]))
            return

        if open < n:
            current[open+close]="("
            self.__generate(current, n, open+1, close, result)
        
        if close < open:
            current[open+close] = ")"
            self.__generate(current, n, open, close+1, result)


obj = Solution()
result = obj.generateParenthesis(3)
print(result)