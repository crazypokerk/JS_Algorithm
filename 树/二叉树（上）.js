function TreeNode(val, left, right) {
    this.val = (undefined ? 0 : val);
    this.left = (undefined ? null : left);
    this.right = (undefined ? null : right);
}

/**
 * 递归——二叉树的前、中、后序遍历
 */
var preResult = [], inResult = [], postResult = [];
/**
 * 二叉树前序遍历
 * @param {TreeNode} root 
 * @returns 
 */
const preorderTraversal = (root) => {
    // 结束条件
    if (root == null) return;
    preResult.push(root.val);
    if (root.left != null) preorderTraversal(root.left);
    if (root.right != null) preorderTraversal(root.right);
}

/**
 * 二叉树中序遍历
 * @param {TreeNode} root
 * @returns
 */
const inorderTraversal = (root) => {
    if (root == null) return;
    if (root.left != null) inorderTraversal(root.left);
    inResult.push(root.val);
    if (root.right != null) inorderTraversal(root.right);
}

/**
 * 二叉树后序遍历
 * @param {TreeNode} root
 * @returns
 */
const postorderTraversal = (root) => {
    if (root == null) return;
    if (root.left != null) postorderTraversal(root.left);
    if (root.right != null) postorderTraversal(root.right);
    postResult.push(root.val);
}

var f = new TreeNode(7, null, null);
var e = new TreeNode(6, null, null)
var d = new TreeNode(5, f, null);
var c = new TreeNode(4, null, null);
var b = new TreeNode(3, e, null);
var a = new TreeNode(2, c, d)
var root = new TreeNode(1, a, b);

// preorderTraversal(root);
// console.log(preResult);
// inorderTraversal(root);
// console.log(inResult);
// postorderTraversal(root);
// console.log(postResult);

/**
 * 迭代——二叉树的前、中、后序遍历
 */
const preorder = root => {
    if (root == null) return root;
    let tmpStack = [], preRes = [];
    tmpStack.push(root);
    // 这里有一个疑问，在 Java 中可以对对象之间进行 == null 来判断比如Stack\ArrayList 是否为空
    // 但在 JavaScript 中 array == null，当 array 没有元素时上面语句输出为 false
    // array === null 结果也为 false
    // == 等同于 undefined
    while (tmpStack.length != 0) {
        let cur = tmpStack.pop();
        preRes.push(cur.val);
        if (cur.right) tmpStack.push(cur.right);
        if (cur.left) tmpStack.push(cur.left);
    }
    return preRes;
}

console.log(preorder(root));

const inorder = root => {

}