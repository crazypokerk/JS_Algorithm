/**
 * 面试题17.10.
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let candidate, count = 0, times = 0;
    for (let i = 0; i < nums.length; i++) {
        if (count === 0) candidate = nums[i];
        if (nums[i] === candidate) count++;
        else count--;
    }
    nums.forEach(val => {
        if (val === candidate) times++;
    });
    return times > nums.length / 2 ? candidate : -1;
};

console.log(majorityElement([2, 1, 3, 4, 1, 5, 1, 1, 1, 2, 1]));