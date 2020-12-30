// Valid palindrome (with special chars!)
// Filter str & replace non-alpha chars first
// O(N) time & space (new string) 

var isPalindrome = function(s) {
    let clean = s.toLowerCase().replace(/[^a-z0-9]/gi,'')

    for (let i = 0; i < Math.floor(clean.length); i++) {
        if (clean[i] !== clean[clean.length - i - 1]) {
            return false
        }
    }
    return true
};
    
