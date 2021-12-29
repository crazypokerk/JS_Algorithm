/**
 * Leetcode:605
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    for (let i = 0; i < flowerbed.length;) {
        if (!n) return true;
        if (flowerbed[i] == 1) i += 2;
        // 如果是最后一格为0，肯定可以种一朵
        else if (i == flowerbed.length - 1 || flowerbed[i + 1] == 0) {
            n--;
            i += 2;
        }
        else i += 3;
    }
    return n == 0;
};