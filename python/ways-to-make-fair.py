class Solution:
    def waysToMakeFair(self, nums: [int]) -> int:
        length = len(nums)
        oddsum = [0]*length
        evensum = [0]*length

        evensum[0] = nums[0]

        for i in range(1, length):
            if i%2 == 0:
                evensum[i] = evensum[i-1]+nums[i]
                oddsum[i] = oddsum[i-1]
            else:
                oddsum[i] = oddsum[i-1]+nums[i]
                evensum[i] = evensum[i-1]

        # print(oddsum)
        # print(evensum)
        
        prefixo = 0
        prefixe = 0
        count = 0

        for i in range(0, length):
            ##remove i from nums
            suffixo = oddsum[length-1] - oddsum[i]
            suffixe = evensum[length-1] - evensum[i]

            if prefixo+suffixe == prefixe+suffixo:
                # print(i, prefixo+suffixe)
                count += 1

            prefixo = oddsum[i]
            prefixe = evensum[i]

        # print(count)
        
        return count

# obj = Solution()
# obj.waysToMakeFair([1,2,3])


## 6,1,7  ,4,1
#o 6 6 13 13 14
#e 0 1 1   5  5


# remove : 0
# o:0   o:8
# e:0   e:5


# remove : 1
# o:6   o:8
# e:0   e:4


# remove : 2
# o:6  o:1
# e: 1  e:4

# remove : 3
# o:13   o:1
# e: 1   e: 0

# remove: 4
# o:13   o:0
# e: 5   e:0

