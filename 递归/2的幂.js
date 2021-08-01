/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = (n) => {
    // 结束条件
    if (n <= 0) return false;
    if (n == 1) return true;
    // 通项公式
    // 下面这个 if 也可以不写，但是就会导致很多无效计算比如非2的倍数，复杂度高
    if (n > 1 && n % 2 == 0) {
        return isPowerOfTwo(n / 2);
    }
    return false;
};

console.log(isPowerOfTwo(6));