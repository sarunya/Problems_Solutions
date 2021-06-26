class Solution:
    def maxArea(self, h: int, w: int, horizontalCuts:list, verticalCuts:list) -> int:
        horizontalCuts.append(0)
        horizontalCuts.append(h)
        horizontalCuts.sort()

        verticalCuts.append(0)
        verticalCuts.append(w)
        verticalCuts.sort()

        maxH = 1

        for i in range(1, len(horizontalCuts)):
            maxH = max(maxH, horizontalCuts[i]-horizontalCuts[i-1])

        maxV = 1

        for i in range(1, len(verticalCuts)):
            maxV = max(maxV, verticalCuts[i]-verticalCuts[i-1])

        return maxH * maxV
        


        