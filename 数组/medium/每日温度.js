/**
 * Leetcode:739
 * 输入: temperatures = [73,74,75,71,69,72,76,73]
 * 输出: [1,1,4,2,1,1,0,0]
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let result = new Array(temperatures.length).fill(0);
    let stack = [];
    for (let i = 0; i < temperatures.length; i++) {
        while (stack && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let index = stack.pop();
            result[index] = i - index;
        }
        stack.push(i);
    }
    return result;
};