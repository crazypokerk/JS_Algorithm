/**
 * 最简单的二分查找
 * @param {Array} arr 
 * @param {number} val 
 * @returns 
 */
const EasyBinarySearch = (arr, val) => {
    let low = 1, high = arr.length - 1;
    while (low <= high) {
        // let mid = (low + high) / 2;
        // let mid = low - low / 2 + high / 2;
        // let mid = low + (high - low) / 2;
        let mid = low + ((high - low) >> 1);
        if (arr[mid] == val) {
            return mid;
        } else if (arr[mid] < val) {
            low = mid + 1;
        } else {
            high = high - 1;
        }
    }
    return -1;
}
/**
 * 递归实现二分查找
 * @param {Array} arr 
 * @param {number} low 
 * @param {number} high 
 * @param {number} val 
 * @returns 
 */
const RecurisonBinarySearch = (arr, low, high, val) => {
    // 结束条件
    if (low > high) return -1;
    // 通项公式
    let mid = low + ((high - low) >> 1);
    if (arr[mid] == val) {
        return mid;
    } else if (arr[mid] < val) {
        RecurisonBinarySearch(arr, mid + 1, high, val);
    } else {
        RecurisonBinarySearch(arr, low, mid - 1, val);
    }
}