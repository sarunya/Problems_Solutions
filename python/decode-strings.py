class Solution:
    def decodeString(self, s: str) -> str:
        #create an empty stack
        stack = []

        #run through length of the string for each character
        for i in range(0, len(s)):
            #push in to the stack if character is not a closed bracket
            if s[i] != ']':
                stack.append(s[i])
            else:
                cur_str = ""
                num = ""

                #else pop all characters from stack till open bracket
                while len(stack)>0:
                    ch = stack.pop()
                    if(ch=='['):
                        break
                    else:
                        cur_str = ch+cur_str

                #pop integers from stack till a alpha number is reached
                while len(stack)>0 and stack[-1].isdigit():
                    num = stack.pop()+num

                #add n time of current string to new string
                num = int(num) if len(num)>0 else 1
                cur_str = (cur_str*num)
                stack.append(cur_str)
                
        return "".join(stack)