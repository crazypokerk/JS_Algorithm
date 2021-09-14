/**
 * Leetcode:796
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
    if (s.length != goal.length) return false;
    return (s + s).includes(goal);
};