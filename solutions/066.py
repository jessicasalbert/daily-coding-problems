# Plus one

class Solution:
    def plusOne(self, nums: List[int]) -> List[int]:
        x = len(nums) - 1
        
        while (nums[x] == 9 and x > 0):
            nums[x] = 0
            x -= 1
        
        if x == 0 and nums[0] == 9:
            nums.insert(0, 1)
            for x in range(1, len(nums)):
                nums[x] = 0
        else:
            nums[x] += 1
            
        return nums
