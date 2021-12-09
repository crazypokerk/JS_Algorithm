/**
 * Leetcode:144
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    const result = [];
    if (!root) return result;
    let dfs = root => {
        if (!root) return;
        result.push(root.val);
        dfs(root.left);
        dfs(root.right);
    }
    dfs(root);
    return result;
};