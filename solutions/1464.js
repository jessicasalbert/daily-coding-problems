# Maximum Product of Two Elements in an Array

class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        max = None
        index = None
        for x in range(len(nums)):
            if max == None or nums[x] > max:
                max = nums[x]
                index = x
        secondMax = None
        for x in range(len(nums)):
            if secondMax == None or nums[x] > secondMax:
                if nums[x] == max and x == index:
                    continue
                else:
                    secondMax = nums[x]
        return (max - 1) * (secondMax - 1)
