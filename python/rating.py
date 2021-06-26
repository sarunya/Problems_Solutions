class Rating:

    def __processRating__(self, rating:[int], condFun)-> int:
        result = 0
        dp = [0]*len(rating)

        for i in range(0, len(rating)-1)[::-1]:
            ## inner loop to check if there is element greater than current value
            ## and has any element greater to its right
            gCount = 0
            for j in range(i+1, len(rating)):
                if condFun(rating[i], rating[j]) and dp[j]>0:
                    result += dp[j]
                if condFun(rating[i], rating[j]):
                    gCount += 1
            
            dp[i] = gCount

        return result

    def __checkGreater__(self, a, b):
        return a>b
    

    def __checkSmaller__(self, a, b):
        return a<b
    
    
    def greaterCount(self, rating: [int]) -> int:
        return self.__processRating__(rating, self.__checkGreater__)


    def getLesserCount(self, rating: [int]) -> int:
        return self.__processRating__(rating, self.__checkSmaller__)
    
    def numTeams(self, rating: [int]) -> int:
        ##get greater count
        count = self.greaterCount(rating)
        # print(f"greater count {count}")
        
        ##get lesser count
        count += self.getLesserCount(rating)
        # print(f"smaller count {count}")
        
        return count
        
        
# 2 5 3 4 1
# 1 0 1 0 0

# 1 2 1 1 0