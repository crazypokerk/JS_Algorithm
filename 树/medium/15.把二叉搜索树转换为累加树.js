/**
 * Leetcode:538
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (root) {
    if (!root) return root;
    let pre;
    let dfs = root => {
        if (!root) return;
        dfs(root.right);
        root.val += pre == null ? 0 : pre.val;
        pre = root;
        dfs(root.left);
        return root;
    }
    return dfs(root);
};