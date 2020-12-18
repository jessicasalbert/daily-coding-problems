// Remove element in place - elements order can be changed

// j moves through each elements, updates i with all indices !== value 
// O(n) time; O(1) space
var removeElement = function(nums, val) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j]
            i++
        }
    }
    return i
}
