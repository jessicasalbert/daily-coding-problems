// Palindrome Number

// O(log(n)) time


// Solution 1 - convert to string 
// O(log(n)) space to store string/array

var isPalindrome = function(x) {
    if (x < 0) {
        return false
    }
    x = x.toString()
    let l = 0
    let r = x.length - 1
    while (l <= r) {
        if (x[l] === x[r]) {
            l++
            r--
        } else {
            return false
        }
    }
    return true
};

// Solution 2 - use % to add digits to array 
// O(1) space
var isPalindrome = function(x) {
    if (x < 0) {
        return false
    }
    let current = x
    let reversed = 0;
    
    while (current > 0) {
        let lastDigit = current % 10
        reversed = (reversed * 10) + lastDigit
        current = Math.floor(current / 10)
    }
    return reversed === x
};
