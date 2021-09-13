/**
 * Leetcode:392
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = (s, t) => {
    if (s.length > t.length) return false;
    let si = 0, tj = 0;
    while (si < s.length && tj < t.length) {
        if (s[si] === t[tj]) {
            si++;
            tj++;
        } else {
            tj++;
        }
    }
    return si === s.length;
};
console.log(isSubsequence('axc', 'ahbgdc'))