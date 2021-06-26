class Solution:
    def palindromePairs(self, words: [str]) -> [[int]]:
        result = []

        word_map = {w:i for i,w in enumerate(words)}
        
        ##iterate through all values of words
        for i, word in enumerate(words):
            for j in range(0, len(word)+1):

                ##prefix and suffix
                prefix = word[:j]
                prefixpal = prefix[::-1]
                suffix = word[j:]
                suffixpal = suffix[::-1]

                #if prefix is a palindrome itself, check if there is a palindrome of suffix availabel in words
                if prefix==prefixpal and suffixpal in word_map and word_map[suffixpal] != i:
                    result.append([word_map[suffixpal], i])

                #similarly if suffix is palindrome, check for prefix 
                if suffix!='' and suffix==suffixpal and prefixpal in word_map and word_map[prefixpal] != i:
                    result.append([i, word_map[prefixpal]])


        return result