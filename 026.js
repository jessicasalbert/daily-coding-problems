// Remove duplicates from sorted array in place 

// Two pointers - O(n) time, O(1) space

var removeDuplicates = function(nums) {
    if (nums.length === 0) {return 0}
    
    let l = 0
    let r = 1
    
    while (r < nums.length) {
        if (nums[l] !== nums[r]) {
            l++
            nums[l] = nums[r]
        }
        r++ 
    }
    return l + 1
};

// Right pointer runs ahead to find next non-duplicate number
// Left pointer keeps track of current non-duplicated array
