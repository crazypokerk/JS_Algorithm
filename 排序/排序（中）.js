/**
 * 归并排序
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

/**
 * 快速排序
 * @param {Array} arr 
 * @param {number} left 
 * @param {number} right
 */
const QuickSort = (arr, left, right) => {
    if (left < right) {
        const pivot = Math.floor(Math.random(10) * right);
        QuickSort(arr, left, pivot - 1);
    }
}

const Partition = (arr, pivot, left, right) => {
    let i = left;
    const pVal = arr[pivot];
    for (let j = left; j < right; j++) {
        if (arr[j] < pivot) {
            swap(arr, j, i++);
        }
    }
    swap(arr, i, pVal);
    return i;
}

const swap = (arr, a, b) => {
    let tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
}