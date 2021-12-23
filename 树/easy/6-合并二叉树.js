/**
 * Leetcode:617
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
    if (!root1) return root2;
    if (!root2) return root1;
    root1.val += root2.val;
    root1.left = mergeTrees(root1.left, root2.left);
    root1.right = mergeTrees(root1.right, root2.right);
    return root1;
};
var mergeTreesBFS = (root1, root2) => {
    if (!root1 && !root2) return null;
    if (!root1) return root2;
    if (!root2) return root1;
    const queue = [];
    queue.push(root1);
    queue.push(root2);
    while (queue.length) {
        let r1 = queue.shift();
        let r2 = queue.shift();
        r1.val += r2.val;
        if (r1.left && r2.left) {
            queue.push(r1.left);
            queue.push(r2.left);
        } else {
            r1.left = r1.left ??= r2.left;
        }
        if (r1.right && r2.right) {
            queue.push(r1.right);
            queue.push(r2.right);
        } else {
            r1.right = r1.right ??= r2.right;
        }
    }
    return root1;
}