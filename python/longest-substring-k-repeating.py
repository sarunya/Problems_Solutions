class Solution:
    def longestSubstring(self, s: str, k: int) -> int:
        ##find count of all characters in string s
        result = 0

        
        for i in range(1, 27):

            ##check longest substring with i unique characters
            currentUnique = 0
            count = [0]*26
            start = 0

            for end in range(0, len(s)):

                code = ord(s[end])-97
                print(s[end], code)

                if count[code] == 0:
                    currentUnique += 1
                
                count[code] += 1

                ##if current Unique value is greater than i, then decrement it
                while currentUnique > i:
                    old = ord(s[start])-97
                    count[old] -= 1
                    if count[old] == 0:
                        currentUnique -= 1
                    start += 1

                isValidSubstring = True
                for val in count:
                    if val>0 and val < k:
                        isValidSubstring = False
                        break
                
                if isValidSubstring == True:
                    result = max(result, end-start+1)

        return result



obj = Solution()
result = obj.longestSubstring("ababbcababbc", 2)
print(result)