/**
 * Leetcode:145
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    let result = [];
    dfs(root, result);
    return result;
};
var dfs = (root, res) => {
    if (!root) return null;
    res.push(root.val);
    dfs(root.left, res);
    dfs(root.right, res);
}

