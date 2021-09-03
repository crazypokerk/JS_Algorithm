/**
 * Leetcoed:20
 * @param {String} s 
 * @returns 
 */
var isValid = function (s) {
    if (s.length % 2 === 1) return false;
    let tmpStack = [], strArr = [...s];
    const obj = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for (let i = 0; i < strArr.length; i++) {
        if (obj[strArr[i]] !== undefined) {
            tmpStack.push(strArr[i]);
        } else {
            if (obj[tmpStack.pop()] !== strArr[i]) return false;
        }
    }
    return !tmpStack.length;
};
var s = '([])';
console.log(isValid(s));