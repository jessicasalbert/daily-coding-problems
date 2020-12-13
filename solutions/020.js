// Valid parenthesis 
// ugly answer - splice array to remove pairs 

var isValid = function(str) {
    const pairs = {
        "(" : ")",
        "[" : "]",
        "{" : "}"
    }
    if (str.length % 2 !== 0) {
        return false
    }
    str = str.split("")
    const len = str.length
    for (let j = 0; j <= len; j++) {
        for (let i = 0; i < str.length - 1; i++) {
            if (str[i + 1] === pairs[str[i]]) {
                str.splice(i, 2)
            }
        }
        if (str.length === 0) {
            return true
        }
    }
    return str.length === 0
        
};


// Better answer - push & pop from array (stack)
// O(n) time (loop through str) & space (stack)

var isValid = function(str) {
    const pairs = {
        ")" : "(",
        "]" : "[",
        "}" : "{"
    }
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(" || str[i] === "[" || str[i] === "{") {
            stack.push(str[i])
        } else {
            if (stack.length !== 0 && stack[stack.length - 1] === pairs[str[i]]) {
                stack.pop()
            } else { 
                return false
            }
        }
    }
    return stack.length === 0 
};
