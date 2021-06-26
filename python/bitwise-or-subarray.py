class Solution:
    def subarrayBitwiseORs(self, arr: [int]) -> int:
        mapset = set()
        dp = [0]*len(arr)

        for i in range(0, len(arr)):
            for j in range(i, len(arr)):
                dp[j] = dp[j]|arr[j-i]

                if dp[j] not in mapset:
                    mapset.add(dp[j])
            
            arr = dp.copy()
            print(arr)

        return len(mapset)


#1,1,2
#0,0,0
#1,1,2
#  1,2
#   
#1,1,2
#  1 