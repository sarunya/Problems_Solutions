class Solution:
    def maxSatisfied(self, customers: [int], grumpy: [int], minutes: int) -> int:
        satisfied = 0
        grumpiness = 0
        result = 0

        for i in range(0, len(minutes)):
            if grumpy[i] == 0:
                satisfied += customers[i]

        ###If store keeper is not grumpy for first m minutes
        for j in range(0, len(minutes)):
            if grumpy[j] == 1:
                grumpiness += customers[j]

            ##Remove previous grumpiness from 
            if j>=minutes and grumpy[j-minutes] == 1:
                grumpiness -= customers[j-minutes]

            result = max(result, satisfied+grumpiness)


        return result