/**
 * Leetcode:145
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    let result = [];
    dfs(root, result);
    return result;
};
var dfs = (root, res) => {
    if (!root) return null;
    res.push(root.val);
    dfs(root.left, res);
    dfs(root.right, res);
}

// var peek = function () {
//     return this[this.length - 1];
// }
// Array.prototype.peek = peek;
var peek = stack => {
    return stack[stack.length - 1];
}
// 迭代
var postorderTraversal1 = root => {
    const stack = [], result = [];
    if (!root) return result;
    let cur = root, tmp = null;
    while (stack.length > 0 || cur) {
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack.pop();
        if (!cur.right || cur.right == tmp) {
            result.push(cur.val);
            tmp = cur;
            cur = null;
        } else {
            stack.push(cur);
            cur = cur.right;
        }
    }
    return result;
}