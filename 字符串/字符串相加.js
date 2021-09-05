/**
 * Leetcode:415
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = (num1, num2) => {
    if (!num1) return num2;
    if (!num2) return num1;

    let i = n1Arr.length, j = n2Arr.length, res = [], add = 0;
    while (i >= 0 || j >= 0 || add != 0) {
        const x = i >= 0 ? num1.charAt(i) - '0' : 0;
        const y = j >= 0 ? num2.charAt(j) - '0' : 0;
        const sum = i + j + add;
        res.push(sum % 10);
        add = Math.floor(sum / 10);
        i--, j--;
    }
    return [...res.reverse()];
}