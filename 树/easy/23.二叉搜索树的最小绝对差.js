/**
 * Leetcode:530
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
    let min_abs = Number.POSITIVE_INFINITY;
    let pre;
    let dfs = root => {
        if (!root) return;
        dfs(root.left);
        min_abs = pre == null ? min_abs : Math.min(min_abs, root.val - pre.val);
        pre = root;
        dfs(root.right);
    }
    dfs(root);
    return min_abs;
};