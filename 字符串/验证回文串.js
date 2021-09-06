/**
 * Leetcode 125
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = s => {
    if (!s) return true;
    let lowercase = s.toLowerCase();
    let res = [];
    for (const str of lowercase) {
        if ((str.charCodeAt() >= 97 && str.charCodeAt() <= 122)
            || (str.charCodeAt() >= 48 && str.charCodeAt() <= 57)) res.push(str);
    }
    let i = 0, j = res.length - 1;
    while (i < j) {
        if (res[i] !== res[j]) return false;
        i++, j--;
    }
    return true;
}

let s = '0P';
console.log(isPalindrome(s));

