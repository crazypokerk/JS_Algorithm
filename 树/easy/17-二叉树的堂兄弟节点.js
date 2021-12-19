/**
 * Leetcode:993
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
    let xParent = null, xDepth = null, xFound = null;
    let yParent = null, yDepth = null, yFound = null;
    var dfs = (root, depth, parent) => {
        if (!root) return;
        if (x === root.val) {
            [xParent, xDepth, xFound] = [parent, depth, true];
        } else if (y === root.val) {
            [yParent, yDepth, yFound] = [parent, depth, true];
        }
        if (xFound && yFound) return;
        dfs(root.left, depth + 1, root);
        if (xFound && yFound) return;
        dfs(root.right, depth + 1, root);
    }
    dfs(root, 0, null);
    return xDepth === yDepth && xParent !== yParent;
};
