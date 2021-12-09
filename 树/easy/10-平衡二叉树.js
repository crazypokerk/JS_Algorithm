/**
 * Leetcode:110
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    let flag = true;
    let dfs = root => {
        if (!flag) return;
        if (!root) return 0;
        let left = dfs(root.left) + 1;
        let right = dfs(root.right) + 1;
        if (Math.abs(left - right) > 1) flag = false;
        else return Math.max(left, right);
    }
    dfs(root);
    return flag;
};