# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseNode(self, head: ListNode) -> ListNode:
        revHead = None
        
        while head!=None:
            nextnode = head.next
            head.next = revHead
            revHead = head
            head = nextnode
            
        return revHead
            
    def getDecimalValue(self, head: ListNode) -> int:
        head = self.reverseNode(head)
        power = 0
        ans = 0
        
        while head!=None:
            ans += head.val * (2**power)
            head = head.next
            power += 1
        
        return ans