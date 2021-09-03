/**
 * Leetcode:14
 * @param {String[]} strs 
 * @returns 
 */
const longestCommonPrefix = strs => {
    if (!strs) return '';
    const len = strs[0].length, count = strs.length;
    const str0 = strs[0];
    for (let i = 0; i < len; i++) {
        for (let j = 1; j < count; j++) {
            let strToArr = [...strs[j]];
            let ch = strToArr[i];
            if (strs[j].charAt(i) != ch || i === strs[j].length) {
                return str0.substring(0, i);
            }
        }
    }
    return str0;
}

let strs = [","];
console.log(longestCommonPrefix(strs));