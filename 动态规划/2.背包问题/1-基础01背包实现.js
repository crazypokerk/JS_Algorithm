/**
 * 现有三个物品，物品0，物品1，物品2分别的重量为1,2,3kg；
 * 现有一个背包，背包最大容量为4，每件物品占一个单位背包容量；
 * 三个物品的价值分别为：物品0/5rmb，物品1/8rmb，物品2/10rmb
 * 根据此背景求出最大可容纳的物品价值几何？
 * @param {number[]} weight 
 * @param {number[]} values 
 * @param {number} package_volumn 
 * @returns 
 */
function _01package(weight, values, package_volumn) {
    const wlen = weight.length;
    const dp = Array(wlen).fill(0).map(() => Array(package_volumn + 1).fill(100));
    for (let i = 0; i < wlen; i++) {
        dp[i][0] = 0;
    }
    for (let i = 0; i <= package_volumn; i++) {
        dp[0][i] = values[0];
        if (weight[0] > i) dp[0][i] = 0;
    }
    for (let i = 1; i < wlen; i++) {
        for (let j = 0; j <= package_volumn; j++) {
            // 当前背包容量小于现有物品所占容量
            if (j < weight[i]) dp[i][j] = dp[i - 1][j];
            else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + values[i]);
            }
        }
    }
    return dp[wlen - 1][package_volumn];
}

/**
 * 滚动数组优化
 * @param {number[]} weight 
 * @param {number[]} values 
 * @param {number} package_volumn 
 * @returns 
 */
function _01_1_package(weight, values, package_volumn) {
    const wlen = weight.length;
    const dp = Array(package_volumn + 1).fill(0);
    for (let i = 0; i < wlen; i++) {
        for (let j = package_volumn; j >= weight[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - weight[i]] + values[i]);
        }
    }
    return dp[package_volumn];
}
const weight = [1, 3, 4];
const values = [15, 20, 30];
const package_volumn = 4;
// console.log(_01package(weight, values, package_volumn));
console.log(_01_1_package(weight, values, package_volumn));