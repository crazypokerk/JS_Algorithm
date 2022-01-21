/**
 * Leetcode:93
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    const path = [], result = [];
    let backTracking = (startIndex, s) => {
        if (path.length == 4 && startIndex < s.length) return;
        if (path.length == 4 && startIndex == s.length) {
            result.push(path.join('.'));
            return;
        }
        for (let i = 1; i <= 3; i++) {
            if (startIndex + i - 1 > s.length) return;
            let str = s.substring(startIndex, startIndex + i);
            if (isValid(str)) {
                path.push(str);
                backTracking(startIndex + i, s);
                path.pop();
            } else {
                break;
            }
        }
    }
    backTracking(0, s);
    return result;
};
var isValid = s => {
    if (s.length != 1 && s.charAt(0) == '0') return false;
    if (+s > 255) return false;
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) > '9' || s.charAt(i) < '0') return false;
    }
    return true;
}
console.log(restoreIpAddresses("25525511135"));