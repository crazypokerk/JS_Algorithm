/**
 * Leetcode:100
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
var isSmaeTreeBFS = (p, q) => {
    if (!p && !q) return true;
    if (!p || !q) return false;
    const queue = [p, q];
    while (queue.length) {
        let p = queue.shift();
        let q = queue.shift();
        if (!p && !q) continue;
        if (!p || !q || p.val != q.val) return false;
        queue.push(p.left);
        queue.push(q.left);
        queue.push(p.right);
        queue.push(q.right);
    }
    return true;
}