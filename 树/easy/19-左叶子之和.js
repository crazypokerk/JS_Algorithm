/**
 * Leetcode:404
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
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
var isLeaf = node => {
    return node.left === null && node.right === null;
}