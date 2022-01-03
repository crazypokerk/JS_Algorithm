/**
 * Leetcode:70
 * 动态规划：
 *  1、dp数组以及下标的含义；
 *  2、递推公式；
 *  3、dp数组如何初始化；
 *  4、遍历顺序；
 *  5、打印dp数组。
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    // 剪枝递归
    // const memory = [];
    // let recruit = n => {
    //     if (n <= 2) return n;
    //     if (!!memory[n]) return memory[n];
    //     else {
    //         memory[n] = recruit(n - 1) + recruit(n - 2);
    //         return memory[n];
    //     }
    // }
    // return recruit(n);
    /*
    const dp = [0, 1, 2];
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
    */
    if (n <= 1) return n;
    const dp = [];
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        let tmp = dp[1] + dp[2];
        dp[1] = dp[2];
        dp[2] = tmp;
    }
    return dp[2];
};
console.log(climbStairs(5));