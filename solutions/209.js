// Sliding window - continue looking right until total >= num, then subtract from left side 
// O(n) time; O(1) space

var minSubArrayLen = function(n, arr) {
    if (arr.length === 0) {return 0}
    
    let min = Infinity;
    let start = 0;
    let total = 0;
    let end = 0;
    
    while (start < arr.length) {
        
        if (total < n && end < arr.length) {
            total += arr[end]
            end++
        } else if (total >= n) {
            let temp = end - start
            if (temp < min) {min = temp}
            total -= arr[start]
            start++
        } else {
            break;
        }
    }
    return (min === Infinity ? 0 : min)
};
