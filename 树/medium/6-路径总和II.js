/**
 * Leetcode:113
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    const result = [];
    if (!root) return result;
    const path = [root.val];
    let dfs = (root, count) => {
        if (!root.left && !root.right && count == 0) {
            result.push(Array.from(path));
            return;
        }
        if (!root.left && !root.right) return;
        if (root.left) {
            path.push(root.left.val);
            count -= root.left.val;
            dfs(root.left, count);
            count += root.left.val;
            path.pop();
        }
        if (root.right) {
            path.push(root.right.val);
            count -= root.right.val;
            dfs(root.right, count);
            count += root.right.val;
            path.pop();
        }
        return;
    }
    dfs(root, targetSum - root.val);
    return result;
};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var t1 = new TreeNode(1, null, null);
var t5 = new TreeNode(5, null, null);
var t2 = new TreeNode(2, null, null);
var t7 = new TreeNode(7, null, null);
var t44 = new TreeNode(4, t5, t1);
var t13 = new TreeNode(13, null, null);
var t11 = new TreeNode(11, t7, t2);
var t8 = new TreeNode(8, t13, t44);
var t4 = new TreeNode(4, t11, null);
var root = new TreeNode(5, t4, t8);

pathSum(root, 22);