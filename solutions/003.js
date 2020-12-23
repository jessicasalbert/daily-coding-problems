// Longest substring without duplicate chars
// O(n) space & time
// Store most recently "seen" indices and adjust window accordingly

var lengthOfLongestSubstring = function(s) {
    const seen = {};
    let longest = 0;
    let start = 0;
    let current;
    
    for (let i = 0; i < s.length; i++) {
        if (seen[s[i]]) {
            start = Math.max(seen[s[i]], start)
        } 
        seen[s[i]] = i + 1
        current = i - start + 1
        if (current > longest) {longest = current}
    }
    return longest
};  
