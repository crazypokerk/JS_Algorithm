class ListNode {
    constructor(val, next) {
        this.val = (val == undefined ? 0 : val);
        this.next = (next == undefined ? 0 : val);
    }
}

class ListQueue {
    constructor() {
        this.listQ = new ListNode(-1);
        this.head = this.listQ;
        this.tail = this.listQ;
    }

    enqueue(val) {
        if (this.head == null) {
            this.head.next = new ListNode(val);
            this.head = this.head.next;
        } else {
            this.tail.next = new ListNode(val);
            this.tail = this.tail.next;
        }
    }

    dequeue() {
        if (this.head.next == null) return this.head.val;
        const val = this.head.val;
        this.head = this.head.next;
        return val;
    }
}