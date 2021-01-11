# Maximum subarray
# Reset running total when subarray is less than 0 

class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        maxSum = None
        runningSum = 0
        for i in range(len(nums)):
            runningSum += nums[i]
            if maxSum is None or runningSum > maxSum:
                maxSum = runningSum
            if runningSum < 0:
                runningSum = 0
        return maxSum
