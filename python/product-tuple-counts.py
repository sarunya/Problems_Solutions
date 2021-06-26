from collections import defaultdict

class Solution:

    def tupleSameProduct(self, nums: []) -> int:
        map = defaultdict(dict)


        for i in range(0, len(nums)-1):
            for j in range(i+1, len(nums)):
                val = nums[i]*nums[j]
                count = 1
                if val in map:
                    count += map.get(val)
                map[val] = count

        for (key, value) in map.items():
            print(key, value)