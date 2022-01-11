/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Leetcode:337
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
    let dfs = cur => {
        if (!cur) return [0, 0];
        let left = dfs(cur.left);
        let rigth = dfs(cur.right);
        let not_steal = Math.max(left[0], left[1]) + Math.max(rigth[0], rigth[1]);
        let steal = cur.val + left[0] + rigth[0];
        return [not_steal, steal];
    }
    const res = dfs(root);
    return Math.max(...res);
};