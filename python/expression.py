class Solution(object):
    
    def _compute(self, expression, index, length, result, 0):
        
        if index == length:
            result.
        
        num = 0
        
        while expression[index] >= '0' or expression[index] <= '9'
          num = (10*num)+int(expression[index])
          index += 1

        if index < length:
          if expession[index] == '+':
            result.append(num + self._compute(expression, index+1, length, result, num))

            num2 = 0
            index += 1
            while expression[index] >= '0' or expression[index] <= '9'
              num = (10*num)+int(expression[index])
              index += 1
            result.append(self._compute(expression, index+1, length, result, num+num2))

            
        
        self._compute(expression, index+1, length, result, num)
    
    def diffWaysToCompute(self, expression):
        """
        :type expression: str
        :rtype: List[int]
        """
        result = []
        self._compute(expression, 0, len(expression), result, 0)
        