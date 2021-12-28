/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    const sqrt_5 = Math.sqrt(5);
    // n+1 是因为从0~n，所以是n+1项
    const fib_n = Math.pow((1 + sqrt_5) / 2, n + 1) - Math.pow((1 - sqrt_5) / 2, n + 1);
    return Math.round(fib_n / sqrt_5);
};