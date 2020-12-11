// Roman to integer
// O(n) time where n is length of input string; O(1) space to store symbols

var romanToInt = function(s) {
    const symbols = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
        "IV": 4,
        "IX": 9,
        "XL": 40,
        "XC": 90,
        "CD": 400,
        "CM": 900
    }
    let integer = 0
    for (let i = 0; i < s.length; i++) {
        if (symbols[s[i] + s[i + 1]]) {
            integer += symbols[s[i] + s[i + 1]]
            i++
        } else {
            integer += symbols[s[i]]
        }
    }
    return integer
};
