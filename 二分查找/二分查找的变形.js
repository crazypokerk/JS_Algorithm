const FirstEleBinarySearch = (arr, val) => {
    let low = 0, high = arr.length - 1;
    while (low <= high) {
        let mid = low + ((high - low) >> 1);
        if (arr[mid] < val) {
            low = mid + 1;
        } else if (arr[mid] > val) {
            high = mid - 1;
        } else {

        }
    }
}