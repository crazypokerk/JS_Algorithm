/**
 * 二分查找：查找第一个等于 val 的值
 * @param {Array} arr 
 * @param {number} val 
 * @returns 
 */
const FirstEleBinarySearch = (arr, val) => {
    let low = 0, high = arr.length - 1;
    // 为什么是 low <= high，而不是 low < high ？
    // 原因是因为当查找的数组个数为偶数时，low 或 high 再倒数第二次比较时就退出 while 循环
    // 也就无法找到 val
    while (low <= high) {
        let mid = low + ((high - low) >> 1);
        if (arr[mid] < val) {
            low = mid + 1;
        } else if (arr[mid] > val) {
            high = mid - 1;
        } else {
            // 这里的条件我理解：因为是要找第一个等于 val 的值，所以一种情况是 mid 已经指向了
            // 数组的第一个元素，那么此时返回这个第一个元素下标，也就是 0 ；第二种情况就是有多个
            // 重复的目标元素 val，此时比较 mid 之前元素的值，如果该值等于 mid 指向的值，那么
            // 说明 mid 指向的不是第一个等于 val 的值，移动 high 指针即可。
            if (mid == 0 || arr[mid - 1] != val) return mid;
            else high = mid - 1;
        }
    }
    retrun - 1;
}

/**
 * 二分查找：查找最后一个等于 val 的值
 * @param {Array} arr 
 * @param {number} val 
 * @returns 
 */
const LastEleBinarySearch = (arr, val) => {
    let low = 0, high = arr.length - 1;
    while (low <= high) {
        let mid = low + ((high - low) >> 1);
        if (arr[mid] < val) {
            low = mid + 1;
        } else if (arr[mid] > val) {
            high = mid - 1;
        } else {
            if (mid == length - 1 || arr[mid + 1] != val) return mid;
            else low = mid + 1;
        }
    }
    return -1;
}

/**
 * 二分查找：查找第一个大于 val 的值
 * @param {Array} arr 
 * @param {number} val 
 */
const FirstGreaterEleBinarySearch = (arr, val) => {
    let low = 0, high = arr.length - 1;
    while (low <= high) {
        let mid = low + ((high - low) >> 1);
        while (low <= high) {
            if (arr[mid] >= val) {
                if (arr[mid - 1] < val || mid == 0) return mid;
                else high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
    }
    return -1;
}

/**
 * 二分查找：查找最后一个小于 val 的值
 * @param {Array} arr 
 * @param {number} val 
 */
const LastSmallerEleBinarySearch = (arr, val) => {
    let low = 0, high = arr.length - 1;
    while (low <= high) {
        let mid = low + ((high - low) >> 1);
        if (arr[mid] <= val) {
            if (arr[mid + 1] > val || mid == arr.length - 1) return mid;
            else low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}