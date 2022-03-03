/**
 * Leetcode:235
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    if (!root) return root;
    if (root.val > p.val && root.val > q.val) {
        let left = lowestCommonAncestor(root.left, p, q);
        if (left) return left;
    }
    if (root.val < p.val && root.val < q.val) {
        let right = lowestCommonAncestor(root.right, p, q);
        if (right) return right;
    }
    return root;
};