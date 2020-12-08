//Pascal's triangle

let generate = function(numRows) {
    if (numRows < 1) {
        return []
    }
    const results = [
        [1]
    ]
    for (let i = 1; i < numRows; i++) {
        let row = []
        for (let j = 0; j <= i; j++) {
            let num;
            if (j === 0 || j === i) {
                num = 1
            } else {
                num = results[i - 1][j - 1] + results[i - 1][j]
            }
            row.push(num)
        }
        results.push(row)
    }
    return results
};
