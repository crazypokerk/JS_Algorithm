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

//---------------------------------------------------------------------------
/**
 * 快速排序
 * @param {Array} arr 
 * @param {number} left 
 * @param {number} right
 */
const QuickSort = (arr, left, right) => {
    if (left < right) {
        // 这里有问题的原因在于，在比较右区的时候，随机数生成的 pivot 不在右区区间内，比如右区区间为 [3,6],而随机数生成的范围为[0,6]
        // let pivot = Math.floor(Math.random(1) * right);
        // let pivot;
        // do {
        //     pivot = Math.floor(Math.random() * right);
        // } while (pivot < left);
        // let pivot = Math.min(Math.max(left, Math.floor((left + right) / 2)), right);
        // 突然发现，这个算法只适用于 pivot 选择为 right 时，排序正确，除此之外选择其他的 pivot 都是错误的。
        let pivot = right;
        let partIndex = Partition(arr, pivot, left, right);
        // 这里判断 partIndex - 1 目的是为了确认当前 partIndex 指向是否还剩两个或一个元素
        // pivot 左边的所有元素都小于它，右边的元素都大于它
        QuickSort(arr, left, partIndex - 1 < left ? left : partIndex - 1);    // 左区排序
        QuickSort(arr, partIndex + 1 > right ? right : partIndex + 1, right); // 右区排序
    }
}
/**
 * 分区函数
 * @param {Array} arr 
 * @param {number} pivot 
 * @param {number} left
 * @param {number} right
 * @returns 
 */
const Partition = (arr, pivot, left, right) => {
    // i 是哨兵指针，j 来遍历
    let i = left;
    const pVal = arr[pivot];
    for (let j = left; j < right; j++) {
        if (arr[j] < pVal) {
            swap(arr, j, i++);
        }
    }
    swap(arr, i, pivot);
    return i;
}
/**
 * 交换 pivot 指针值和 i 哨兵指针值
 * @param {Array} arr 
 * @param {number} a 
 * @param {number} b 
 */
const swap = (arr, a, b) => {
    let tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
}

let aa = [6, 8, 7, 5, 4]
QuickSort(aa, 0, aa.length - 1);
console.log(aa);

// ---------------------------------------------------------
/**
 * 优化后的快排
 * @param {Array} arr 
 * @param {number} left 
 * @param {number} right 
 */
const QuickSort__ = (arr, left, right) => {
    if (left < right) {
        let pivot = partition(arr, left, right);
        QuickSort__(arr, left, pivot - 1);
        QuickSort__(arr, pivot + 1, right);
    }
}
const partition = (arr, left, right) => {
    // random 随机生成 0~1 的随机数，right - left + 表示生成随机数的右闭区间， + left 为左闭区间
    // 即生成的随机数区间为： [left, left + (right - left + 1)]
    let pivot = Math.floor(Math.random() % (right - left + 1) + left);
    (function (arr, a, b) {
        let tmp = arr[a];
        arr[a] = arr[b];
        arr[b] = tmp;
    }(arr, pivot, left));

    let pivotVal = arr[pivot];

    while (left < right) {
        while (arr[right] >= pivotVal && left < right) right--;
        arr[left] = arr[right];

        while (arr[left] <= pivotVal && left < right) left++;
        arr[right] = arr[left];
    }
    arr[right] = pivotVal;
    return right;
}
let bb = [6, 8, 7, 5, 4]
QuickSort__(bb, 0, bb.length - 1);
console.log(bb);