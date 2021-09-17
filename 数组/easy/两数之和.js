/**
 * Leetcode:1
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *  输入：nums = [2,7,11,15], target = 9
    输出：[0,1]
    解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
 */
var twoSum = function (nums, target) {
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        while (j < nums.length) {
            if (target === nums[i] + nums[j]) {
                ans.push(i);
                ans.push(j);
                return ans;
            }
            j++;
        }
    }
    return ans;
};
var twoSum1 = (nums, target) => {
    let map = new Map(), i = 0, res = '';
    while (i < nums.length) {
        if (!map.has(target - nums[i])) {
            map.set(nums[i], i);
            i++;
        } else {
            res = res + i + map.get(target - nums[i]);
            break;
        }
    }
    ans = [...res].map(i => {
        return i - '0';
    });
    return ans.sort();
}
console.log(twoSum([2, 7, 11, 15], 26));
console.log(twoSum1([2, 7, 11, 15], 26));