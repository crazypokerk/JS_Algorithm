function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
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
var b = new TreeNode(3, null, e);
var a = new TreeNode(2, c, d)
var root = new TreeNode(1, a, b);

//           root1
//          /    \
//         a2     b3
//        / \      \
//      c4   d5    e6
//          /
//         f7

// preorderTraversal(root);
// console.log(preResult);
// inorderTraversal(root);
// console.log(inResult);
// postorderTraversal(root);
// console.log(postResult);

/**
 * 迭代——二叉树的前、中、后序遍历
 */
/**
 * 二叉树的前序遍历，借助栈
 * @param {TreeNode} root 
 * @returns 
 */
const preorder = root => {
    let tmpStack = [], preRes = [];
    if (root == null) return preRes;
    tmpStack.push(root);
    // 这里有一个疑问，在 Java 中可以对对象之间进行 == null 来判断比如Stack\ArrayList 是否为空
    // 明白了，因为数组本身也是对象，数组中没有元素但并不代表数组对象指向了 null
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

/**
 * 二叉树中序遍历，借助指针 cur 和栈
 * @param {TreeNode} root 
 * @returns 
 */
const inorder = root => {
    let tmpStack = [], inRes = [], cur = root;
    if (root == null) return inRes;
    while (tmpStack.length != 0 || cur) {
        if (cur) {
            tmpStack.push(cur);
            cur = cur.left;
        } else {
            cur = tmpStack.pop();
            inRes.push(cur.val);
            cur = cur.right;
        }
    }
    return inRes;
}

console.log(inorder(root));

const postorder = root => {
    // pre 跟屁虫指针
    let tmpStack = [], postRes = [], pre = null;
    if (root == null) return postRes;
    while (tmpStack.length != 0 || root) {
        // 第一个 while 目的是为了将所有左子节点放入临时栈
        while (root) {
            tmpStack.push(root);
            root = root.left;
        }
        // 因为后序遍历的顺序是 左右根，所以弹出最后放入的子节点
        // 如果当前节点没有右子节点或者跟屁虫指针指向当前节点的右子节点
        // 就表示当前节点root指针之前已经“经过”过，也就是表示跟屁虫指针指向的就是
        // 当前节点下一级的根节点，因为根节点是最后一个放入，那么直接放入即可

        // 否则说明当前节点的右子节点不为空或者还没有遍历过
        // 那么就继续遍历右子节点
        root = tmpStack.pop();
        if (!root.right || root.right == pre) {
            postRes.push(root.val);
            pre = root;
            root = null;
        } else {
            tmpStack.push(root);
            root = root.right;
        }
    }
    return postRes;
}

console.log(postorder(root));