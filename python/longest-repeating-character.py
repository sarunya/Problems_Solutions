class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        ##only 26 alphabets available for replacing
        alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        result = 0

        for char in alphabets:
            #change non matching to char
            start = 0
            current = 0
            usedK = 0
            while current < len(s):
                if s[current]!=char and usedK<k:
                    usedK += 1
                elif usedK==k:
                    while s[start]==char:
                        start += 1

                current += 1
                result = max(result, current-start+1)
                
        return result
                
