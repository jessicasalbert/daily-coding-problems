# Square root
# Use binary seach algo

class Solution:
    def mySqrt(self, x: int) -> int:
        right = x
        left = 0
        
        while left < right:
            mp = left + floor((right - left) / 2)
            if mp ** 2 <= x and (mp + 1) ** 2 > x:
                return mp
            elif mp ** 2 > x:
                right = mp - 1
            else:
                left = mp + 1
            
        return right
        
