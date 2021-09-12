/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = columnNumber => {
    //65 90
    let res = [];
    // res.push(String.fromCharCode(mod + 64));
    while (columnNumber != 0) {
        res.push(String.fromCharCode(--columnNumber % 26 + 65));
        columnNumber = Math.floor(columnNumber / 26);
    }
    return res.reverse().join('');
};
console.log(convertToTitle(701));