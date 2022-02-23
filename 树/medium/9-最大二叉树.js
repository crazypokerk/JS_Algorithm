/**
 * Leetcode:654
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
    if (nums.length == 0) return null;
    let max_value = Math.max(...nums);
    let max_index;
    for (max_index = 0; max_index < nums.length; max_index++) {
        if (nums[max_index] == max_value) break;
    }
    const root = new TreeNode(max_value);
    const left_arr = nums.slice(0, max_index);
    const right_arr = nums.slice(max_index + 1, nums.length);
    root.left = dfs(left_arr);
    root.right = dfs(right_arr);
    return root;
};