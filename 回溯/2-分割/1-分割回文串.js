/**
 * Leetcode:131
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    const path = [], result = [];
    let slength = s.length;
    let backTracking = (startIndex, s) => {
        if (startIndex >= slength) {
            result.push(Array.from(path));
            return;
        }
        for (let i = startIndex; i < slength; i++) {
            if (isPalidrome(startIndex, i, s)) {
                let str = s.substr(startIndex, i - startIndex + 1);
                path.push(str);
            } else continue;
            backTracking(i + 1, s);
            path.pop();
        }
    }
    backTracking(0, s);
    return result;
};
let isPalidrome = (left, right, s) => {
    if (s.length <= 1) return true;
    while (left < right) {
        if (s.charAt(left) != s.charAt(right)) return false;
        left++;
        right--;
    }
    return true;
}
console.log(partition('aab'));