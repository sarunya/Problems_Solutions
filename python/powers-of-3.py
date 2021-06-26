import math

class Solution:
    ##TODO
    def checkPowersOfThree(self, n: int) -> bool:
        ##check if current number is greater than 3
        powv = math.pow(3, 14)

        while powv > 0:
            # print(n, i)

            n = n-powv

            if n==0:
                return True
            elif n<0:
                n += powv
            
            powv = powv/3

        return False


obj = Solution()
print(obj.checkPowersOfThree(91))