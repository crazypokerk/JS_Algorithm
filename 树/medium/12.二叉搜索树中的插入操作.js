/**
 * Leetcode:701
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
    if (!root) {
        const new_node = new TreeNode(val);
        return new_node;
    }
    if (root.val > val) root.left = insertIntoBST(root.left, val);
    if (root.val < val) root.right = insertIntoBST(root.right, val);
    return root;
};