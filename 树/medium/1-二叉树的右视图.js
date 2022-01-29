/**
 * Leetcode:199
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
    const result = [];
    let dfs = (root, result, depth) => {
        if (!root) return;
        if (result.length == depth) result.push(root.val);
        dfs(root.right, result, depth + 1);
        dfs(root.left, result, depth + 1);
    }
    dfs(root, result, 0);
    return result;
};
var rightSideViewBFS = root => {
    const result = [];
    if (!root) return result;
    const queue = [root];
    while (queue.length) {
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let cur = queue.shift();
            if (i == len - 1) result.push(cur.val);
            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
        }
    }
    return result;
}