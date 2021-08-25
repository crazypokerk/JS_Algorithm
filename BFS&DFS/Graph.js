class LinkedList {
    val;
    next;
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    add(val) {
        this.next = new LinkedList(val, null);
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
        this.adjacencyLists[start].add(start);
        this.adjacencyLists[end].add[end];
    }
}