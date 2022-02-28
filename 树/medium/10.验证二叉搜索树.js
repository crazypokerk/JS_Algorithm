/**
 * Leetcode:98
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
   let max_value = Number.NEGATIVE_INFINITY;
   // 二叉搜索树中序遍历下是有序递增序列
   var dfs = root => {
      if (!root) return true;
      let left = dfs(root.left);
      if (max_value < root.val) max_value = root.val;
      else return false;
      let right = dfs(root.right);
      return left && right;
   }
   return dfs(root);
};