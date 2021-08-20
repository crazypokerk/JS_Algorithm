function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

function initTree() {
    const i = new TreeNode(29, null, null);
    const h = new TreeNode(31, null, null);
    const g = new TreeNode(19, null, i);
    const f = new TreeNode(26, g, h);
    const e = new TreeNode(15, null, null);
    const d = new TreeNode(5, null, null);
    const c = new TreeNode(16, e, f);
    const b = new TreeNode(9, d, null);
    const a = new TreeNode(14, b, c);
    return root = a;
}
/**
 * 二分查找树 --- 查找元素
 * @param {number} data 
 * @param {TreeNode} root 
 * @returns 
 */
const BST_search = (data, root) => {
    if (!root) return null;
    let cur = root;
    while (cur) {
        if (data > cur.val) {
            cur = cur.right;
        } else if (data < cur.val) {
            cur = cur.left;
        } else {
            return cur;
        }
    }
    return null;
}
/**
 * 二分查找树 --- 插入元素
 * @param {number} insertData 
 * @param {TreeNode} root 
 * @returns 
 */
const BST_insert = (insertData, root) => {
    if (!root) return new TreeNode(insertData, null, null);
    let cur = root;
    while (cur) {
        if (insertData > cur.val) {
            if (!cur.right) {
                cur.right = new TreeNode(insertData, null, null);
                return;
            }
            cur = cur.right;
        } else {
            if (!cur.left) {
                cur.left = new TreeNode(insertData, null, null);
                return;
            }
            cur = cur.left;
        }
    }
}
/**
 * 二分查找树 --- 删除
 * @param {number} delData 
 * @param {TreeNode} root 
 */
const BST_delete = (delData, root) => {
    let cur = root, prev = null;
    while (cur && cur.val != delData) {
        prev = cur;
        if (delData > cur.val) cur = cur.right;
        else cur = cur.left;
    }
    if (!cur) return;

    // 此时 prev 指向 cur 的父节点
    // Step 1、两个子节点
    if (cur.left && cur.right) {
        let tmpCur = cur.right, tmpPrev = tmpCur;
        while (tmpCur.left) {
            tmpPrev = tmpCur;
            tmpCur = tmpCur.left;
        }
        cur.val = tmpCur.val;
        // 这里是为了将两个子节点问题转化为一个子节点或无子节点的问题
        // 因为到这里，tmpCur 指向的子树一定只有右子节点或无节点
        cur = tmpCur;
        prev = tmpPrev;
    }

    // Step 2、无子节点或一个子节点
    // 这里真的是太巧秒了，一步到位，直接将无子节点情况和一个子节点情况都囊括到
    let child;
    if (cur.left) child = cur.left;
    else if (cur.right) child = cur.right;
    else child = null;

    if (!prev) root = child;
    else if (prev.left == cur) prev.left = child;
    else prev.right = child;
}
var root = initTree();
// console.log(root);
// BST_delete(16, root);
// console.log(root);
/**
 * 
 * @param {TreeNode} root 
 * @returns 
 */
const BST_search_max_data = root => {
    if (!root) return -1;
    // 中序遍历
    let tmpStack = [], inorder = [], cur = root;
    while (cur || tmpStack.length != 0) {
        if (cur) {
            tmpStack.push(cur);
            cur = cur.left;
        } else {
            cur = tmpStack.pop();
            inorder.push(cur.val);
            cur = cur.right;
        }
    }
    return inorder[inorder.length - 1];
}
// console.log(BST_search_max_data(root));

var min;
const BST_search_min_data = root => {
    if (!root) return;
    min = root.val;
    if (root.left) BST_search_min_data(root.left);
    if (root.right) BST_search_min_data(root.right);
}
console.log(BST_search_min_data(root));

const BST_search_front_data = root => {

}

const BST_search_next_data = root => {

}