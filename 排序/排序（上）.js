/**
 * 冒泡排序
 *  array.length - i - 1
 *  精妙之处在与此，减 i 优化已经冒泡了的元素；
 *               减 1 在于比较元素是当前和下一个。
 * @param {Array} array 
 * @returns Array
 */
let BubbleSort = (array) => {
    if (array.length <= 1) return array;
    for (let i = 0; i < array.length; i++) {
        let flag = false;
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
                flag = true;
            }
        }
        if (!flag) break;
    }
    return array;
}

var bubbleSort_update = array => {
    let swapped = true;
    let lastSwapIndex = -1;
    const len = array.length;
    while (swapped) {
        swapped = false;
        for (let i = 0; i < len - 1; i++) {
            if (array[i] > array[i + 1]) {
                swap(array, i, i + 1);
                swapped = true;
                lastSwapIndex = i;
            }
        }
    }
    return array;
}
var swap = (arr, i, j) => {
    arr[i] = arr[i] + arr[j];
    arr[j] = arr[i] - arr[j];
    arr[i] = arr[i] - arr[j];
}

var a = BubbleSort([3, 5, 6, 2, 4, 1, 9, 0]);
console.log(a);

var minNumber = function (nums) {
    let len = nums.length;
    let swapped = true;
    let i = 0;
    while (swapped) {
        swapped = false;
        for (let j = 0; j < len - 1 - i; j++) {
            if (compare(nums[j], nums[j + 1])) {
                swap(nums, j, j + 1);
                swapped = true;
            }
        }
        i++;
    }
    let result = '';
    for (const s of nums) {
        result += s;
    }
    return result;
};
var compare = (n1, n2) => {
    let s1 = "" + n1 + n2;
    let s2 = "" + n2 + n1;
    if (Number.parseInt(s1) > Number.parseInt(s2)) return true;
    else return false;
}
var swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

minNumber([3, 30, 34, 5, 9]);

/**
 * 插入排序
 *  [已排序区间]，[未排序区间]
 * [0, i-1(j)], [i, n-1]
 * @param {Array} array
 * @returns Array
 */
let InsertSort = (array) => {
    if (array.length <= 1) return array;
    for (let i = 1; i < array.length; i++) {
        let tmp = array[i];
        let j = i - 1;
        for (; j >= 0; j--) {
            if (array[j] > tmp) array[j + 1] = array[j];
            else break;
        }
        array[j + 1] = tmp;
    }
    return array;
}
var b = InsertSort([4, 5, 6, 3, 2, 1]);
console.log(b);

/**
 * 选择排序
 *  [已排序区间]，[未排序区间]
 * [0, i], [i+1, n-1]
 * @param {Array} array 
 * @returns Array
 */
let SelectSort = (array) => {
    if (array.length <= 1) return array;
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) min = j;
        }
        if (min != i) {
            let tmp = array[min];
            array[min] = array[i];
            array[i] = tmp;
        }
    }
    return array;
}
var c = SelectSort([4, 5, 6, 3, 2, 1]);
console.log(b);

let selectSortII = nums => {
    let len = nums.length;
    let minIndex, maxIndex;
    let swap = (nums, i, j) => { [nums[i], nums[j]] = [nums[j], nums[i]]; }
    for (let i = 0; i < Math.floor(len / 2); i++) {
        minIndex = i;
        maxIndex = i;
        for (let j = i + 1; j < len - i; j++) {
            if (nums[j] > nums[maxIndex]) maxIndex = j;
            if (nums[j] < nums[minIndex]) minIndex = j;
        }
        if (minIndex == maxIndex) break;
        swap(nums, minIndex, i);
        // 如果最大值的下标刚好是 i，由于 nums[i] 和 nums[minIndex] 已经交换了，所以这里要更新 maxIndex 的值。
        if (maxIndex == i) maxIndex = minIndex;
        let lastIndex = len - 1 - i;
        swap(nums, maxIndex, lastIndex);
    }
    return nums;
}
console.log(selectSortII([3, 6, 1, 2, 5, 4]));