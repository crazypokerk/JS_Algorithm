/**
 * Leetcode:13
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
    if (!s) return 0;
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let n = s.length, res = 0;
    for (let i = 0; i < n; i++) {
        let curNum = map[s.charAt(i)];
        if (i < n - 1 && curNum < map[s.charAt(i + 1)]) {
            res -= curNum;
        } else {
            res += curNum;
        }
    }
    return res;
};