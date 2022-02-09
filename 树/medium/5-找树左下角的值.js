/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Leetcode:513
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {

};
var findBottomLeftValueDFS = root => {
    let maxDepth = Number.NEGATIVE_INFINITY;
    let maxLeftNodeValue = Number.NEGATIVE_INFINITY;
    let dfs = (root, leftDepth) => {
        // 如果是叶子节点
        if (!root.left && !root.right) {
            if (leftDepth > maxDepth) {
                maxDepth = leftDepth;
                maxLeftNodeValue = root.val;
            }
            return;
        }
        if (root.left) {
            leftDepth++;
            dfs(root.left, leftDepth);
            leftDepth--;
        }
        if (root.right) {
            leftDepth++;
            dfs(root.right, leftDepth);
            leftDepth--;
        }
        return;
    }
    dfs(root, 0);
    return maxLeftNodeValue;
}