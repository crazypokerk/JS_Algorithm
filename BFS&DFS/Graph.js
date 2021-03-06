class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor(head) {
        this.head = head === undefined ? null : head;
        this.size = 0;
    }
    add(element) {
        let node = new ListNode(element);
        let cur = null;
        if (!this.head) {
            this.head = node;
        } else {
            cur = this.head;
            while (cur.next) {
                cur = cur.next;
            }
            cur.next = node;
        }
        this.size++;
    }

    isEmpty() {
        return this.size === 0;
    }

    takeFirst() {
        let tmp;
        if (!this.head) return null;
        else {
            tmp = this.head;
            this.head = this.head.next;
            tmp.next = null;
            this.size--;
        }
        return tmp;
    }
}
class Graph {
    vertices;
    adjacencyLists = [];
    constructor(vertices) {
        this.vertices = vertices;
        for (let i = 0; i < vertices; ++i) {
            this.adjacencyLists[i] = new LinkedList();
        }
    }
    addEdge(start, end) {
        this.adjacencyLists[start].add(end);
        this.adjacencyLists[end].add(start);
    }
}

// var lists = new LinkedList();
// lists.add(8);
// lists.add(3);
// lists.add(6);
// lists.add(4);
// console.log(lists);

// console.log(lists.takeFirst());
// console.log(lists);