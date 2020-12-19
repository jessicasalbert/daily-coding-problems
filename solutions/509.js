// Fibonacci number

// #1 - Recursion
// O(n^2) time; O(n) space on callstack

var fib = function(n) {
    if (n === 1) {return 1}
      if (n === 0) {return 0}
      return fib(n - 1) + fib(n - 2)
};


// #2 - Iterative 
// O(n) time; O(1) space

var fib = function(n) {
    if (n === 0) {return 0}
    
    const prev = [0, 1]
    for (let i = 2; i < n; i++) {
        const fibnum = prev[0] + prev[1]
        prev[0] = prev[1];
        prev[1] = fibnum
    }
    return prev[0] + prev[1]
};
