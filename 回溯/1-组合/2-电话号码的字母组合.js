/**
 * Leetcode:17
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (!digits.length) return [];
    const mapping = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    };
    let path = [];
    let result = [];
    let backtracking = (digits, index) => {
        if (index == digits.length) {
            result.push(path.join(''));
            return;
        }
        let digit = [...digits][index] - '0';  // 23 
        let letters = mapping[digit];  // abc
        for (let i = 0; i < letters.length; i++) {
            path.push(letters[i]);
            backtracking(digits, index + 1);
            path.pop();
        }
    }
    backtracking(digits, 0);
    return result;
};
letterCombinations("23");