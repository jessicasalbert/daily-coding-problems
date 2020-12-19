// strStr() (needle in haystack - essentially indexOf())
// O(n * m) space & time

var strStr = function(haystack, needle) {
    if (needle === "") {return 0}
    let len = needle.length
    
    for (let i = 0; i < haystack.length; i++) {
        if (haystack.substring(i, i + len) === needle) {
            return i
        }
    }
    return -1
};
