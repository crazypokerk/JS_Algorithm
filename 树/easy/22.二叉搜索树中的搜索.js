/**
 * Leetcode:700
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
    if (!root) return null;
    if (root.val == val) return root;
    return root.val > val ? searchBST(root.left, val) : searchBST(root.right, val);
};

var searchBST_II = (root, val) => {
    while (root) {
        if (root.val > val) root = root.left;
        else if (root.val < val) root = root.right;
        else return root;
    }
    return null;
}