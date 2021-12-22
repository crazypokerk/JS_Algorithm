/**
 * Leetcode:226
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (!root) return null;
    let tmp = root.right;
    root.right = root.left;
    root.left = tmp;
    invertTree(root.left);
    invertTree(root.right);
    return root;
};
var invertTreeBFS = root => {
    if (!root) return null;
    const queue = [];
    queue.push(root);
    while (queue.length != 0) {
        let cur = queue.shift();
        let tmp = cur.left;
        cur.left = cur.right;
        cur.right = tmp;
        if (cur.left) queue.push(cur.left);
        if (cur.right) queue.push(cur.right);
    }
    return root;
}