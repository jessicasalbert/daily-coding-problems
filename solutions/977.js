// Squares of a sorted array
// O(n) time, O(n) space
// Use L & R pointer on initial array to fill result array in sorted order

var sortedSquares = function(nums) {
    let results = new Array(nums.length).fill(0)
    
    let resultPointer = nums.length -1;
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            results[resultPointer] = nums[left] ** 2
            left++
        } else {
            results[resultPointer] = nums[right] ** 2
            right--
        }
        resultPointer--
    }
    return results
};
