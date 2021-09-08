/**
 * Leetcode:344
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = s => {
    if (s.length <= 1) return;
    let i = 0, j = s.length - 1;
    while (i < j) {
        [s[i++], s[j--]] = [s[j], s[i]];
    }
};

let input = ["h", "e", "l", "l"];
reverseString(input);
console.log(input);