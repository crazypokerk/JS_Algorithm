/**
 * Leetcode:169
 * 输入：[2,2,1,1,1,2,2]
 * 输出：2
 * 投票算法 —— 值得了解下
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    // let map = new Map();
    // for (let v of nums) {
    //     if (map.has(v)) {
    //         map.set(v, map.get(v) + 1);
    //     } else {
    //         map.set(v, 1)
    //     }
    // }
    // let max = 0, maxk;
    // map.forEach((value, key) => {
    //     if (max < value) {
    //         max = value;
    //         maxk = key;
    //     }
    // });
    // return maxk;
    nums.sort();
    return nums[(nums.length) >> 1];
};
console.log(majorityElement([4, 4, 4, 2, 5, 3, 3]));