/**
 * Leetcode:257
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    const result = [];
    if (!root) return result;
    dfs(root, '');
    return result;
    function dfs(root, path) {
        if (root) {
            path += root.val.toString();
            if (!root.left && !root.right) {
                result.push(path);
            } else {
                path += '->'
                dfs(root.left, path);
                dfs(root.right, path);
            }
        }
    }
};