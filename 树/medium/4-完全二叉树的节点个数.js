/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
    if (!root) return 0;
    const queue = [root];
    let counts = 0;
    while (queue.length) {
        let len = queue.length;
        counts += len;
        for (let i = 0; i < len; i++) {
            const cur = queue.shift();
            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
        }
    }
    return counts;
};
var countNodesDFS = root => {
    if (!root) return 0;
    let left = countNodesDFS(root.left);
    let right = countNodesDFS(root.right);
    return left + right + 1;
}