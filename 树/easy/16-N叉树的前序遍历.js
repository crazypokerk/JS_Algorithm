/**
 * Leetcode:589
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
    if (!root) return [];
    let result = dfs(root, []);
    return result;
};
var dfs = (root, result) => {
    if (!root) return;
    result.push(root.val);
    for (let i = 0; i < root.children.length; i++) {
        dfs(root.children[i], result);
    }
    return result;
}