class Heap {
    constructor() {
        this.h = new Array();
        this.max_n = this.h.length;
        this.count = 0;
    }

    insert(val) {
        if (this.max_n == 0) {
            this.h[count++] = val;
        } else {
            this.h[++this.count] = val;
            let i = this.count;
            while (i / 2 > 0 && this.h[i] > this.h[i / 2]) {
                this.swap(this.h, i, i / 2);
                i = i / 2;
            }
        }
    }

    swap(arr, a, b) {
        [arr[a], arr[b]] = [arr[b], arr[a]];
    }
}