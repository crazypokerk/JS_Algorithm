/**
 *
 *    0 —— 1 —— 2
 *    |    |    |
 *    3 —— 4 —— 5
 *         |    |
 *         6 —— 7
 *
 * 深度优先搜索
 * @param {number} start
 * @param {number} end
 * @param {Array} graph
 */
var found = false;
const DFS = (start, end, graph) => {
    let visited = [], prev = [];
    for (let i = 0; i < graph.adjacencyLists.length; i++) {
        visited[i] = -1;
        prev[i] = -1;
    }
    recruitDFS(start, end, graph, visited, prev);
    print(prev, start, end);
}
/**
 * 
 * @param {number} cur 
 * @param {number} end 
 * @param {Array} graph 
 * @param {Array} vis 
 * @param {Array} p 
 * @returns 
 */
const recruitDFS = (cur, end, graph, vis, p) => {
    // 结束条件
    if (found) return;
    vis[cur] = 0;
    if (cur == end) {
        found = true;
        return;
    }

    let lists = graph.adjacencyLists[cur];
    const size = lists.size;
    for (let i = 0; i < size; i++) {
        let node = lists.takeFirst();
        if (vis[node.data] === -1) {
            p[node.data] = cur;
            // 借助栈，后进先出
            // 递归思想-天然栈
            recruitDFS(node.data, end, graph, vis, p);
        }
    }
}

const print = (prev, s, t) => {
    if (s != t && prev[t] != -1) {
        print(prev, s, prev[t]);
    }
    console.log(`--> ${t}`);
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
DFS(0, 6, g);