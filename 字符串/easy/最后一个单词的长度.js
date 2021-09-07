/**
 * Leetcode:58
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
    if (!s) return 0;
    let n = s.length, len = 0, start, end = n - 1;
    while (end >= 0 && s[end] == ' ') end--;
    if (end < 0) return 0;
    start = end;
    while (start >= 0 && s[start] != ' ') start--;
    return end - start;
};

var sss = "Hello World    ";
console.log(lengthOfLastWord(sss));