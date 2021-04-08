# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        current = head
        
        while current!=None :
            currentNext = current.next
            
            #track till current next is different as of current node or end is reached
            while currentNext!=None and currentNext.val==current.val:
                currentNext = currentNext.next
                
            current.next = currentNext
            current = currentNext
            
        return head