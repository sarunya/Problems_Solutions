class Solution:
    def countSubstrings(self, string: str) -> int:
        count = 0
        ##consider each index is centre of a palindrome
        ##and expand on both ends
        for i in range(0, len(string)):
            count += self._getPalindromeLength(string, i)

        return count

    
    def _getPalindromeLength(self, string: str, center: int) -> int:
        odd_count = self._getLength(string, center, center)
        even_count = self._getLength(string, center, center+1)
        return odd_count + even_count

    def _getLength(self, string:str, c1:int, c2:int) -> int:
        '''
        get no of palindromes starting with centers c1 and c2
        '''
        count = 0

        while c1>=0 and c2<len(string) and string[c1]==string[c2]:
            c1 -= 1
            c2 += 1
            count += 1

        return count