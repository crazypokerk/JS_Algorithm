/**
 * Leetcode:415
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = (num1, num2) => {
    if (!num1) return num2;
    if (!num2) return num1;

    let i = num1.length - 1, j = num2.length - 1, add = 0;
    const res = [];
    while (i >= 0 || j >= 0 || add != 0) {
        let a = i < 0 ? 0 : num1.charAt(i) - '0';
        let b = j < 0 ? 0 : num2.charAt(j) - '0';
        res.push((a + b + add) % 10);
        add = Math.floor((a + b + add) / 10);
        i--;
        j--;
    }
    return res.reverse().join('');
}
let num1 = '101', num2 = '8098';
console.log(addStrings(num1, num2));