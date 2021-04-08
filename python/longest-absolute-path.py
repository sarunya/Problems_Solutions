#https://leetcode.com/problems/longest-absolute-file-path/
class Solution(object):

    def lengthLongestPath(self, input):
        """
        :type input: str
        :rtype: int
        """
        filepathdir = {}
        
        input = input.split("\n")
        
        pathnow = []
        ans = 0


        for paths in input:
            paths = paths.split("\t")
            
            pathnow = pathnow[0: len(paths)-1]
            if len(pathnow) == len(paths):
                pathnow[-1] = len(paths[-1])
            else:
                pathnow.append(len(paths[-1]))
                    
            # file path
            if len(paths[-1].split(".")) > 1:
                pathlength = sum(pathnow)+(len(pathnow)-1)
                print(pathnow, sum(pathnow))
                ans = max(ans, pathlength)
          
        # print(ans)
        return ans