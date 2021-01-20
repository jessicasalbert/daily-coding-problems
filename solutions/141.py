# Linked list cycle

# Store nodes in hash and check for duplicates
class Solution:
    def hasCycle(self, head: ListNode) -> bool:
        node = head
        store = {}
        while node:
            if node in store.keys():
                return True
            store[node] = True
            node = node.next
        return False

# Floyd's Tortoise and Hare - faster pointer runs through list taking 2 steps instead of one
# Fast & slow pointer will eventually meet if there is a cycle
class Solution:
    def hasCycle(self, head: ListNode) -> bool:
        if head is None:
            return False
        slow = head
        fast = head.next
        while fast != slow:
            if fast is None or fast.next is None:
                return False
            slow = slow.next
            fast = fast.next.next
        return True
        
