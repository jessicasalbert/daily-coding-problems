//O(n + m) time; O(n) space (n = length of magazine) - or O(1) since object will next exceed 26 keys

var canConstruct = function(ransomNote, magazine) {
    const lettersCount = []
    
    //store letters with counts in object for constant lookup
    for (let i = 0; i < magazine.length; i++) {
        if (!lettersCount[magazine[i]]) {
            lettersCount[magazine[i]] = 1
        } else {
            lettersCount[magazine[i]]++
        }
    }
    
    //iterate through ransom note, decrementing letters
    for (let i = 0; i < ransomNote.length; i++) {
        if (!lettersCount[ransomNote[i]]) {
            return false
        } else {
            lettersCount[ransomNote[i]] = lettersCount[ransomNote[i]] - 1
        }
    }
    return true
};
