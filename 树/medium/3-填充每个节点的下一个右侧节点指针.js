/**
 * Leetcode:116
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    if (!root) return root;
    const queue = [root];
    while (queue.length) {
        const len = queue.length;
        for (let i = 0; i < len; i++) {
            let cur = queue.shift();
            let next = queue[0];
            if (i == len - 1) cur.next = null;
            else cur.next = next;
            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
        }
    }
    return root;
};
var connectDFS = root => {
    if (!root) return root;
    const depth = [];
    let dfs = (root, dep) => {
        if (!root) return;
        dfs(root.right, dep + 1);
        root.next = depth[dep] == undefined ? null : depth[dep];
        depth[dep] = root;
        dfs(root.left, dep + 1);
    }
    dfs(root, 0);
    return root;
}

function TreeNode(val, left, right, next) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
    this.next = next === undefined ? null : next;
}
const root = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(4, null, null, null),
        new TreeNode(5, null, null, null), null),
    new TreeNode(3,
        new TreeNode(6, null, null, null),
        new TreeNode(7, null, null, null), null), null
);
console.log(connectDFS(root));
