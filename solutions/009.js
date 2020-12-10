// Palindrome Number

// O(n) time; O(n) space to store string/array


// Solution 1 - convert to string 

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

var isPalindrome = function(x) {
    if (x < 0) {
        return false
    }
    const digits = []
    while (x >= 1) {
        digits.push(x % 10)
        x = Math.floor(x / 10)
    }
    let l = 0
    let r = digits.length - 1
    while (l <= r) {
        if (digits[l] === digits[r]) {
            l++
            r--
        } else {
            return false
        }
    }
    return true
};
