#Remove Duplicates from Sorted Linked List

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        runner = head
        newList = head
        
        while runner:
            if runner.val != newList.val:
                newList.next = runner
                newList = newList.next
            runner = runner.next
        if newList:
            newList.next = None
        
        return head
