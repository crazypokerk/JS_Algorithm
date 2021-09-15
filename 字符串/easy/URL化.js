/**
 * Leetcode:面试题01.03
 * @param {string} S
 * @param {number} length
 * @return {string}
 */
var replaceSpaces = function (S, length) {
    let i = length - 1, j = S.length - 1;
    let Sarr = [...S];
    while (i >= 0) {
        if (Sarr[i] === ' ') {
            Sarr[j--] = '0';
            Sarr[j--] = '2';
            Sarr[j--] = '%';
        } else {
            Sarr[j--] = Sarr[i];
        }
        i--;
    }
    return Sarr.join('');
};
console.log(replaceSpaces('fuck me     ', 8))