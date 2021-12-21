/**
 * Leetcode:783
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function (root) {
    if (!root) return -1;
    let tmp = -1, min = Number.MAX_VALUE;
    var dfs = root => {
        if (!root) return;
        dfs(root.left);
        if (tmp == -1) tmp = root.val;
        else {
            min = Math.min(min, root.val - tmp);
            tmp = root.val;
        }
        dfs(root.right);
    }
    dfs(root);
    return min;
};
