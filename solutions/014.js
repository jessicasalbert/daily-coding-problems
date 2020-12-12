// Longest common prefix

//O(s) time where s = sum of all word lengths; O(1) space 

var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {return ""}
    if (strs[0] === "") {return ""}
    let longest = ""
    for (let i = 0; i < strs[0].length; i++) {
        let match = strs[0][i]
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] !== match) { 
                return longest
            }
        }
        longest += strs[0][i]
    }
    return longest
};
