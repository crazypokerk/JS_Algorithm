/**
 * Leetcode:515
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
var largestValues = function (root) {
    const maxValues = [];
    if (!root) return maxValues;
    const queue = [root];
    while (queue.length) {
        let maxVal = Number.NEGATIVE_INFINITY;
        const len = queue.length;
        for (let i = 0; i < len; i++) {
            let curNode = queue.shift();
            maxVal = maxVal > curNode.val ? maxVal : curNode.val;
            if (curNode.left) queue.push(curNode.left);
            if (curNode.right) queue.push(curNode.right);
        }
        maxValues.push(maxVal);
    }
    return maxValues;
};
var largestValuesDFS = root => {
    const maxValues = [];
    if (!root) return maxValues;
    let dfs = (root, depth) => {
        if (!root) return;
        maxValues[depth] = maxValues[depth] > root.val ? maxValues[depth] : root.val;
        dfs(root.left, depth + 1);
        dfs(root.right, depth + 1);
    }
    dfs(root, 0);
    return maxValues;
}
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const root = new TreeNode(3, new TreeNode(7, new TreeNode(11, null, null), null), new TreeNode(9, new TreeNode(8, null, null), null));
console.log(largestValuesDFS(root));