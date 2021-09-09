/**
 * Leetcode:408
 *  "word" --- "w02d"
 *  "hi" --- "02"
 *  "abbreviation" --- "a10n"
 *  "abcc" --- "0ab2"
 *  "word" --- "w0ord"
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = (word, abbr) => {
    if (word.length < abbr.length) return false;
    let len = word.length, loc = 0, num = '', flag = 1;
    for (let i = 0; i < abbr.length; i++) {
        if (abbr[i] >= '1' && abbr[i] <= '9') {
            num = num + abbr[i];
        } else if (abbr[i] == '0') {
            if (num.length === 0) flag = 0;
            else num = num + abbr[i];
        } else {
            loc += num - '0';
            num = '';
            if (abbr[i] !== '0' && abbr[i] != word[loc]) {
                flag = 0;
            }
            loc++;
        }
    }
    if (num) {
        loc += num - '0';
    }
    return flag && loc === len;
};


console.log(validWordAbbreviation('abbreviation', 'a10n'));