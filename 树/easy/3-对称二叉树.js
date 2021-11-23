/**
 * Leetcode:101
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    return dfs(root, root);
};
var dfs = (left, right) => {
    if (!left && !right) return true;
    if (!left || !right) return false;
    if (left.val !== right.val) return false;
    return dfs(left.left, right.right) && dfs(left.right, right.left);
}

var isSymmetric1 = root => {
    if (!root || (!root.left && !root.right)) return true;
    const queue = [];
    queue.push(root.left);
    queue.push(root.right);
    while (queue.length !== 0) {
        let l = queue.shift();
        let r = queue.shift();
        if (!l && !r) continue;
        if (!l || !r) return false;
        if (l.val !== r.val) return false;
        queue.push(l.left);
        queue.push(r.right);
        queue.push(l.right);
        queue.push(r.left);
    }
    return queue.length === 0;
}