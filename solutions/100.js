// Same Tree

// DFS to traverse tree, then compare resulting arrays

var isSameTree = function(p, q) {
    
    const traverse = (node, res=[]) => {
        if (!node) return res;
        res.push(node.val);
        if (node.left) traverse(node.left, res) 
        else {
            res.push(null);
        }
        if (node.right) traverse(node.right, res) 
        else {
            res.push(null);
        }
        return res;
    }
    
    let pRes = traverse(p);
    let qRes = traverse(q);
    
    
    
    if (pRes.length !== qRes.length) {
        return false
    }
    
    for (let i = 0; i < pRes.length; i++) {
        if (pRes[i] !== qRes[i]) {
            return false
        }
    }
    return true;
};


// Check right & left trees for unequal values

var isSameTree = function(p, q) {
    
    if (p === null && q === null) {
        return true
    } else if ((p === null || q === null) || p.val !== q.val) {
        return false;
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};
