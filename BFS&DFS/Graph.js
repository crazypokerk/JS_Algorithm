class LinkedList {
    val;
    next;
    head;
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
        this.head = this;
    }
    add(val) {
        while (this.head.next) {
            this.head = this.head.next;
        }
        this.next = new LinkedList(val, null);
    }
}
class Graph {
    vertices;
    adjacencyLists = [];
    constructor(vertices) {
        this.vertices = vertices;
        for (let i = 0; i < vertices; ++i) {
            this.adjacencyLists[i] = new LinkedList(i);
        }
    }
    addEdge(start, end) {
        this.adjacencyLists[start].add(end);
        this.adjacencyLists[end].add(start);
    }
}

var g = new Graph(8);
g.addEdge(0, 1);
g.addEdge(0, 3);
g.addEdge(1, 2);
g.addEdge(1, 4);
g.addEdge(3, 4);
g.addEdge(4, 5);
g.addEdge(4, 6);
g.addEdge(2, 5);
g.addEdge(5, 7);
g.addEdge(6, 7);
console.log(g);
for (let val of g.adjacencyLists) {
    console.log(val);
}
