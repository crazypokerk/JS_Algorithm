/**
 * Leetcode:108
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    var dfs = (nums, left, right) => {
        if (left > right) return null;
        let mid = left + ((right - left) >> 1);
        const root = new TreeNode(nums[mid]);
        root.left = dfs(nums, left, mid - 1);
        root.right = dfs(nums, mid + 1, right);
        return root;
    }
    return dfs(nums, 0, nums.length - 1);
};