/**
 * Leetcode:1556
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
    let res = [], str = n.toString(), count = 0;
    let j = str.length - 1;
    for (let i = str.length - 1; i >= 0; i--) {
        count++;
        if (count === 3) {
            let tmp = str.substr(i, count);
            res.push(tmp);
            j = i;
            count = 0;
        }
    };
    if (count !== 0) res.push(str.substr(0, count));
    return res.reverse().join('.');
};
// 796 01.03
console.log(thousandSeparator(123456789))