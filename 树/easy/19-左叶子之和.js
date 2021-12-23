/**
 * Leetcode:404
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeavesBFS = function (root) {
    if (!root) return 0;
    const queue = [];
    queue.push(root);
    let leftSum = 0;
    while (queue.length) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let cur = queue.shift();
            if (cur.left) {
                if (isLeaf(cur.left)) {
                    leftSum += cur.left.val;
                } else {
                    queue.push(cur.left);
                }
            }
            if (cur.right) {
                if (!isLeaf(cur.right)) queue.push(cur.right);
            }
        }
    }
    return leftSum;
};
var sumOfLeftLeavesDFS = root => {
    let dfs = root => {
        let leftSum = 0;
        if (root.left) leftSum += isLeaf(root.left) ? root.left.val : dfs(root.left);
        if (root.right && !isLeaf(root.right)) leftSum += dfs(root.right);
        return leftSum;
    }
    return root ? dfs(root) : 0;
}
var isLeaf = node => {
    return node.left === null && node.right === null;
}