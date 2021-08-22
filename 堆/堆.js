class Heap {
    constructor(capacity) {
        this.h = new Array[capacity + 1];
        this.max_n = h.length;
        this.count = 0;
    }

    insert(val) {
        if (this.count >= this.max_n) return;
        h[++this.count] = val;
        let i = this.count;
        while (i / 2 > 0 && h[i] > h[i / 2]) {
            this.swap(h, i, i / 2);
            i = i / 2;
        }
    }

    swap(arr, a, b) {
        [arr[a], arr[b]] = [arr[b], arr[a]];
    }
}
