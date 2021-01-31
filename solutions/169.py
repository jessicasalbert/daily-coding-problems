# Majority Element - O(1) space, O(n) time

class Solution(object):
    def majorityElement(self, nums):
        count = 0
        current = nums[0]
        for x in nums:
            if count == 0:
                current = x
            if x == current:
                count += 1
            else:
                count -= 1
            
        return current
    
