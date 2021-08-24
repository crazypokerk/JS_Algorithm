class Heap {
    constructor() {
        this.h = new Array();
        this.count = 0;
    }

    swap(arr, a, b) {
        [arr[a], arr[b]] = [arr[b], arr[a]];
    }

    insert(val) {
        // 这里了解因为模拟堆，第一个元素为空，即从下标 1 开始存储
        this.h[++this.count] = val;
        let i = this.count;
        while (i / 2 > 0 && this.h[i] > this.h[i / 2]) {
            this.swap(this.h, i, i / 2);
            i = i / 2;
        }
    }
}
var h1 = new Heap();
h1.insert(33)
h1.insert(17);
h1.insert(21);
h1.insert(16);
h1.insert(13);
h1.insert(22);
console.log(h1);
