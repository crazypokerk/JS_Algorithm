/**
 * Leetcode:111
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    if (!root) return 0;
    let l = minDepth(root.left);
    let r = minDepth(root.right);
    if (!root.left || !root.right) {
        return l + r + 1;
    } else {
        return Math.min(l, r) + 1;
    }
}