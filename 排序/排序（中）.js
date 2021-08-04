/**
 * 
 * @param {Array} array 
 * @returns Array
 */
let MergeSort = (array) => {
    // 结束条件
    if (array.length <= 1) return array;
    // 通项公式
    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);
    return Merge(MergeSort(left), MergeSort(right));
};
/**
 * 
 * @param {Array} left
 * @param {Array} right
 * @returns Array
 */
let Merge = (left, right) => {
    let tmp = [];
    let index_l = 0, index_r = 0;
    while (left.length > index_l && right.length > index_r) {
        if (left[index_l] <= right[index_r]) {
            tmp.push(left[index_l++]);
        } else {
            tmp.push(right[index_r++]);
        }
    }
    return tmp.concat(left.slice(index_l)).concat(right.slice(index_r));
};

console.log(MergeSort([4, 5, 6, 3, 2, 1]));