class Solution:
    def combinationSum3(self, k: int, n: int) -> list:
        currentSol = list()
        answer = list()
        l = 1
        r = n if n<=9 else 9
        self.__solve__(l, r, n, k, currentSol, answer)
        return answer

    def __solve__(self, l:int, r:int, target:int, targetLen: int, currentSol: list, answer:list):
        if target == 0 and len(currentSol) == targetLen:
            answer.append(currentSol.copy())
            return

        r = r if r<=target else target
        for i in range(l, r+1):
            if i<=target:
                currentSol.append(i)
                self.__solve__(i+1, r, target-i, targetLen, currentSol, answer)
                currentSol.pop()

obj = Solution()
answer = obj.combinationSum3(9, 45)
print(answer)