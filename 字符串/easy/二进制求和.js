/**
 * Leetcode:67
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let i = a.length - 1, j = b.length - 1, add = 0;
    const res = [];
    while (i >= 0 && j >= 0) {
        let x = a[i--] - '0';
        let y = b[j--] - '0';
        let sum = x + y + add;
        add = Math.floor(sum / 2);
        res.push(sum % 2);
    }
    while (i >= 0) {
        let sum = add + (a[i--] - '0');
        add = Math.floor(sum / 2);
        res.push(sum % 2);
    }
    while (j >= 0) {
        let sum = add + (b[j--] - '0');
        add = Math.floor(sum / 2);
        res.push(sum % 2);
    }
    if (add == 1) res.push(add);
    return res.reverse().join('');
};
let a = '11', b = '1';
console.log(addBinary(a, b));