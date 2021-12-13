/**
 * Leetcode:965
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function (root) {
    if (!root) return true;
    let flag = root.val;
    let dfs = root => {
        if (!root) return true;
        if (flag != root.val) return false;
        else return dfs(root.left) && dfs(root.right);
    }
    return dfs(root);
};