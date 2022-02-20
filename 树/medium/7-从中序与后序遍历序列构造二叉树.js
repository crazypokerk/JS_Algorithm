/**
 * Leetcode:106
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    if (postorder.length == 0) return null;
    let rootVal = postorder[postorder.length - 1];
    const root = new TreeNode(rootVal);
    if (postorder.length == 1) return root;
    let index;
    for (index = 0; index < inorder.length; index++) {
        if (inorder[index] == rootVal) break;
    }
    const leftInorder = inorder.slice(0, index);
    const rightInorder = inorder.slice(index + 1, inorder.length);
    postorder = postorder.slice(0, postorder.length - 1);
    const leftPostorder = postorder.slice(0, leftInorder.length);
    const rightPostorder = postorder.slice(leftInorder.length, postorder.length);
    root.left = buildTree(leftInorder, leftPostorder);
    root.right = buildTree(rightInorder, rightPostorder);
    return root;
};
console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]))
