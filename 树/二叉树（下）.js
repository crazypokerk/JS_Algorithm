function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
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
    if (!cur) return false;
    // 1、无子节点或一个子节点
    let child;
    if (cur.left) child = cur.left;
    else if (cur.right) child = cur.right;
    else child = null;
    prev = child;

    if (!prev) root = child;
    else if (prev.left) prev.left = child;
    else prev.right = child;
    // 2、两个子节点

}

const BST_search_max_data = root => {

}

const BST_search_min_data = root => {

}

const BST_search_front_data = root => {

}

const BST_search_next_data = root => {

}