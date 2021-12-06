/**
 * Leetcode:94
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    const result = [];
    if (!root) return result;
    inorder(root);
    return result;
    function inorder(root) {
        if (!root) return null;
        inorder(root.left);
        result.push(root.val);
        inorder(root.right);
    }
};
