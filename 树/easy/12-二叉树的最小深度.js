/**
 * Leetcode:111
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    if (!root) return 0;
    let l = minDepth(root.left);
    let r = minDepth(root.right);
    if (!root.left || !root.right) {
        return l + r + 1;
    } else {
        return Math.min(l, r) + 1;
    }
}
var minDepthBFS = root => {
    if (!root) return 0;
    const queue = [root];
    let minD = 1;
    while (queue.length) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let cur = queue.shift();
            if (!cur.left && !cur.right) return minD;
            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
        }
        minD++;
    }
    return minD;
}