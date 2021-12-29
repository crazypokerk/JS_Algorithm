/**
 * Leetcode:455
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    g.sort((a, b) => { return a - b; });
    s.sort((a, b) => { return a - b; });
    let child = 0;
    // 遍历饼干大小
    for (let cookie = 0; cookie < s.length; cookie++) {
        if (g[child] <= s[cookie] && child < s.length) child++;
    }
    return child;
}