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
    const queue = [root];
    let value = 0;
    while (queue.length) {
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            const cur = queue.shift();
            if (i == 0) value = cur.val;
            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
        }
    }
    return value;
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