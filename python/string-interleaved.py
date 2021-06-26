from collections import defaultdict
class Solution:    
    def __isInterleave(self, s1: str, i1:int, s2: str, i2:int, s3: str, i3:int) -> bool:
        key = f"{i1},{i2},{i3}"
        # print(key)
        if key in self.dp:
            # print(self.dp)
            return self.dp[key]
        
        if i1==len(s1) and i2==len(s2) and i3==len(s3):
            self.dp[key] == True
            return True

        is_interleaved = False
        if i1<len(s1) and s1[i1] == s3[i3]:
            is_interleaved = self.__isInterleave(s1, i1+1, s2, i2, s3, i3+1)
        
        if is_interleaved == False and i2<len(s2) and s2[i2] == s3[i3]:
            is_interleaved = self.__isInterleave(s1, i1, s2, i2+1, s3, i3+1)
        
        self.dp[key] = is_interleaved
        return is_interleaved
    
    
    def isInterleave(self, s1: str, s2: str, s3: str) -> bool:
        if len(s1)+len(s2) != len(s3):
            return False
        self.dp = defaultdict(dict)
        return self.__isInterleave(s1, 0, s2, 0, s3, 0)