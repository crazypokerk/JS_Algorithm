/**
 * Leetcode:105
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    const map = new Map();
    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i);
    }
    var dfs = (p_left, p_right, i_left, i_right, preorder, inorder) => {
        if (p_left > p_right) return null;
        let root_val = preorder[p_left];
        const root = new TreeNode(root_val);
        let inorder_root_index = map.get(root_val);
        let size_left_subtree = inorder_root_index - i_left;
        root.left = dfs(p_left + 1, p_left + size_left_subtree, i_left, inorder_root_index - 1, preorder, inorder);
        root.right = dfs(p_left + size_left_subtree + 1, p_right, inorder_root_index + 1, i_right, preorder, inorder);
        return root;
    }
    return dfs(0, preorder.length - 1, 0, inorder.length - 1, preorder, inorder);
};

