/**
 * Leetcode:88
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 *  输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
    输出：[1,2,2,3,5,6]
    解释：需要合并 [1,2,3] 和 [2,5,6] 。
    合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。
 */
var merge = function (nums1, m, nums2, n) {
    let pos = nums1.length - 1;
    n--, m--;
    while (n >= 0) {
        if (m >= 0 && nums1[m] > nums2[n]) {
            [nums1[m--], nums1[pos--]] = [nums1[pos], nums1[m]];
        } else {
            swap(nums1, nums2, pos--, n--);
        }
    }
    return nums1;
};
var swap = (a1, a2, a, b) => {
    let tmp = a1[a];
    a1[a] = a2[b];
    a2[b] = tmp;
}
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));