from collections import defaultdict

class Node:
    def __init__(self, is_leaf):
        self.is_leaf = is_leaf
        self.child = defaultdict(dict)

class Trie:
    def __init__(self):
        self.root = Node(False)


    def __addWord(self, root: Node, word: str, index: int):
        is_leaf = (index == len(word)-1)

        ##is character present in child
        if word[index] not in root.child:
            root.child[word[index]] = Node(is_leaf)
        else :
            root.child[word[index]].is_leaf = root.child[word[index]].is_leaf or is_leaf

        if not is_leaf:
            self.__addWord(root.child[word[index]], word, index+1)


    def addWord(self, word:str):
        self.__addWord(self.root, word, 0)


    def findPrefix(self, word: str):
        index = self.__findPrefix(self.root, word, 0)

        if index==-1:
            return None
        else:
            return word[:index+1]


    def __findPrefix(self, root:Node, word:str, index: int):

        if index>=len(word) or word[index] not in root.child:
            return -1
        elif root.child[word[index]].is_leaf:
            return index
        else:
            return self.__findPrefix(root.child[word[index]], word, index+1)


    def __traverse(self, root: Node, current_result: list, total_result: list):

        for (key, value) in root.child.items():
            current_result.append(key)
            ##if leaf, add to result
            if value.is_leaf:
                total_result.append("".join(current_result))
            ##traverse
            self.__traverse(value, current_result, total_result)
            ##pop last input value in current_result
            current_result.pop()


    def print(self):
        current_result = list()
        total_result = list()
        self.__traverse(self.root, current_result, total_result)
        print("total result", total_result)


class Solution(object):
    def replaceWords(self, dictionary, sentence):
        """
        :type dictionary: List[str]
        :type sentence: str
        :rtype: str
        """
        trie = Trie()

        ##add words to trie
        for word in dictionary:
            trie.addWord(word)

        ##print values in trie
        # trie.print()

        ##run for all words in sentence
        sentence = sentence.split(" ")

        for i in range(0, len(sentence)):
            replace_word = trie.findPrefix(sentence[i])

            if replace_word != None:
                sentence[i] = replace_word

        return " ".join(sentence)


# sol = Solution()
# dictionary = ["catt","cats","bat","rat"]
# sentence = "the cattle was rattled by the battery"

# result = sol.replaceWords(dictionary, sentence)
# print(result)