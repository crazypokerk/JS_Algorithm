/**
 * Leetcode:226
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (!root) return null;
    let tmp = root.right;
    root.right = root.left;
    root.left = tmp;
    invertTree(root.left);
    invertTree(root.right);
    return root;
};