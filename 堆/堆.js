class Heap {
    constructor() {
        this.h = new Array();
        this.count = 0;
    }

    swap(arr, a, b) {
        [arr[a], arr[b]] = [arr[b], arr[a]];
    }

    insert(data) {
        // 这里了解因为模拟堆，第一个元素为空，即从下标 1 开始存储
        this.h[++this.count] = data;
        let i = this.count;
        while (i / 2 > 0 && this.h[i] > this.h[i / 2]) {
            this.swap(this.h, i, i / 2);
            i = i / 2;
        }
    }

    deleteTop() {
        if (this.count === 0) return -1;
        this.h[1] = this.h[this.count--];
        this.h.length--;
        this.heapify(this.h, this.count, 1);
    }

    heapify(h, count, pos) {
        while (1) {
            let max = pos;
            if (h[pos] < h[2 * pos] && 2 * pos <= count) max = 2 * pos;
            if (h[pos] < h[2 * pos + 1] && 2 * pos + 1 <= count) max = 2 * pos + 1;
            if (max === pos) break;
            this.swap(h, max, pos);
            pos = max;
        }
    }
}
var h1 = new Heap();
h1.insert(33)
h1.insert(27);
h1.insert(21);
h1.insert(16);
h1.insert(15);
h1.insert(19);
console.log(h1);
console.log(h1.count)
h1.deleteTop();
console.log(h1);

const buildHeap = (heap) => {
    for (let i = heap.length / 2; i > 1; i--) {
        // 从上至下，从完全二叉树的最后一个非叶子结点开始，向上堆化
    }
}
