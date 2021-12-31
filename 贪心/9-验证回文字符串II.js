/**
 * Leetcode:680
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
        if (s.charAt(left) != s.charAt(right)) return isValid(s, left + 1, right) || isValid(s, left, right - 1);
        left++;
        right--;
    }
    return true;
};
var isValid = (s, left, right) => {
    while (left < right) {
        if (s.charAt(left) != s.charAt(right)) return false;
        left++;
        right--;
    }
    return true;
}