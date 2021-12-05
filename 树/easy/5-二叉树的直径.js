/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    let max = 0;
    maxDiameter(root);
    return max;
    function maxDiameter(treeNode) {
        if (!treeNode) return 0;
        let left = maxDiameter(treeNode.left);
        let right = maxDiameter(treeNode.right);
        max = Math.max(max, left + right);
        return Math.max(left, right) + 1;
    }
};

