/**
 * Leetcode:面试题01.06
 * @param {string} S
 * @return {string}
 */
var compressString = S => {
    if (S.length == 0) return S;
    const n = S.length, res = [];
    let i = 0, j = 0;
    while (i < n) {
        let count = 0;
        res.push(S[i]);
        while (S[i] === S[j]) {
            count++;
            j++;
        }
        i = j;
        res.push(count);
    }
    return n > res.join('').length ? res.join('') : S;
};
let s = 'aaabbccccc';
console.log(compressString(s));