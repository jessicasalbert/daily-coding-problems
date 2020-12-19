// Merge two sorted arrays into the first array
// O(n + m) time; O(1) space

var merge = function(nums1, m, nums2, n) {
    let nums2p = n - 1;
    let right = m + n - 1;
    let left = m - 1;
    
    while (left >= 0 || nums2p >= 0) {
        if (nums1[left] !== undefined && nums2[nums2p] !== undefined) {
            if (nums1[left] > nums2[nums2p]) {
                nums1[right] = nums1[left] 
                left--
            } else {
                nums1[right] = nums2[nums2p]
                nums2p--
            }
            
        } else if (nums1[left] === undefined) {
            nums1[right] = nums2[nums2p]
            nums2p--
        } else if (nums2[nums2p] === undefined) {
            nums1[right] = nums1[left] 
            left--
        }
        right--
    }
};
