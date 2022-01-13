/**
 * Leetcode:392
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    const arrS = [...s], arrT = [...t];
    const sl = arrS.length, tl = arrT.length;
    if (sl == 1 && tl == 1 && s[0] != t[0]) return false;
    const dp = Array(sl + 1).fill(0).map(() => Array(tl + 1).fill(0));
    for (let i = 1; i <= sl; i++) {
        for (let j = 1; j <= tl; j++) {
            dp[i][j] = dp[i][j - 1];
            if (arrS[i - 1] == arrT[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
        }
    }
    return dp[sl][tl] == sl;
};
isSubsequence('abc', "ahbgdc");