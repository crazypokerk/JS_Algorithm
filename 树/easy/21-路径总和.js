/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Leetcode:112
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if (!root) return false;
    var dfs = (root, count) => {
        if (!root.left && !root.right && count == 0) return true;
        if (!root.left && !root.right) return false;
        if (root.left) {
            if (dfs(root.left, count - root.left.val)) return true;
        }
        if (root.right) {
            if (dfs(root.right, count - root.right.val)) return true;
        }
        return false;
    }
    return dfs(root, targetSum - root.val);
};