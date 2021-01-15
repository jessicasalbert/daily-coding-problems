# Best time to buy and sell stocks

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        left = 0
        right = len(prices) - 1
        
        maxDiff = 0
        minVal = prices[0]
        
        for x in prices:
            if x < minVal:
                minVal = x
            current = x - minVal
            if current > maxDiff:
                maxDiff = current
        
        return maxDiff
