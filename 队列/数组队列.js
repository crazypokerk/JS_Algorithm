class ArrayQueue {
    constructor() {
        this.queue = [];
        this.head = 0;
        this.tail = 0;
    }

    // 入队
    enqueue(item) {
        if (this.tail == this.queue.length - 1) return false;
        this.queue[this.tail++] = item;
        return true;
    }

    // 出队
    dequeue() {
        if (this.head == this.tail) return null;
        let val = this.queue[this.head++];
        return val;
    }

    // 有可能存在当head没有指向数组第一个元素，而tail已经指向最后一个元素的情况
    // 所以要进行数据搬迁
    updateEnqueue(item) {
        if (this.tail = this.queue.length - 1) {
            if (this.head == 0) return false;
            for (let i = this.head; i < this.tail; i++) {
                this.queue[i - this.head] = this.queue[i];
            }
            // 更新head/tail
            this.tail -= this.head;
            this.head = 0;
        }

        this.queue[this.tail++] = item;
        return true;
    }
}

var q = new ArrayQueue();

q.enqueue('a');
q.enqueue('b');
console.log(q);
console.log(q.dequeue());
console.log(q);