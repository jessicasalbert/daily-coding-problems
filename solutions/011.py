# Container with most water
# Start with area of outermost elements, then move the smaller height inward to look for a larger area

class Solution:
    def maxArea(self, height: List[int]) -> int:
        left = 0
        right = len(height) - 1
        maxArea = 0
        while left < right:
            area = (right - left) * min(height[left], height[right])
            maxArea = max(area, maxArea)
            if height[left] <= height[right]:
                left += 1
            else:
                right -= 1
        return maxArea
        
