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