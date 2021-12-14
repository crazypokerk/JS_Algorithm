/**
 * Leetcode:563
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function (root) {
    let sumTilt = 0;
    if (!root) return sumTilt;
    let dfs = root => {
        if (!root) return 0;
        let left = dfs(root.left);
        let right = dfs(root.right);
        sumTilt += Math.abs(left - right);
        return root.val + left + right;
    }
    dfs(root);
    return sumTilt;
};