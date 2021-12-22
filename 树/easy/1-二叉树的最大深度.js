function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/**
 * Leetcode:104
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) return 0;
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    return Math.max(left, right) + 1;
};
const root = new TreeNode(1, null, null);
root.left = new TreeNode(2,
    new TreeNode(4, null, null),
    new TreeNode(5, null,
        new TreeNode(6, null, null)));
root.right = new TreeNode(3, null, null);
console.log(maxDepth(root));

var maxDepthBFS = root => {
    if (!root) return 0;
    const queue = [];
    let max = 0;
    queue.push(root);
    while (queue.length != 0) {
        let s = queue.length;
        for (let i = 0; i < s; i++) {
            let cur = queue.shift();
            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
        }
        max++;
    }
    return max;
}