/**
 * Leetcode:387
 * @param {string} s
 * @return {number}
 */

var firstUniqChar = s => {
    let map = {}, res = -1;
    [...s].forEach(item => {
        if (item in map) {
            map[item]++;
        } else {
            map[item] = 1;
        }
    });
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) {
            res = i;
            break;
        }
    }
    return res;
};

console.log(firstUniqChar('aabb'));