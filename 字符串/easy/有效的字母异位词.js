/**
 * Leetcodee:242
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length != t.length) return false;
    let map = new Map();
    [...s].forEach(item => {
        if (map.has(item)) map.set(item, map.get(item) + 1);
        else map.set(item, 1);
    });
    for (const v of t) {
        if (!map.get(v)) return false;
        else s = s.replace(v, '');
    }
    return s.length === 0;
};
console.log(isAnagram('ac', 'rac'));