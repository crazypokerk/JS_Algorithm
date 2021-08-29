// import Graph from 'BFS&DFS/Graph';
/**
 * 
 *    0 —— 1 —— 2
 *    |    |    |
 *    3 —— 4 —— 5
 *         |    | 
 *         6 —— 7
 * 
 * 广度优先搜索
 * @param {*} start 
 * @param {*} end 
 * @param {Array} graph
 */
const BFS = (start, end, graph) => {
    // 1、输入起始节点和结束节点
    // 2、辅助三变量：
    //  visted: 记录已经访问过的节点
    //  queue: 记录当前层，已经被访问的，但这些被访问的相邻节点还未被访问
    //  prevVertices: 记录当前节点是从哪个前驱节点遍历过来的
    // unshift ---> [0,1,2,3,...] pop --->
    // shift <--- [0,1,2,3,...] push <---
    let visited = [], queue = [], prevvertices = [];
    let s = graph.adjacencyLists[start], t = graph.adjacencyLists[end];
    for (let i = 0; i < graph.adjacencyLists.length; i++) {
        visited[i] = -1;
        prevvertices[i] = -1;
    }
    queue.push(start);
    while (queue.length != 0) {
        let num = queue.shift();     // LinkedList
        // let lists = graph.adjacencyLists[num];
        // 开始遍历链表
        let lists = graph.adjacencyLists[num];
        const size = lists.size;
        for (let i = 0; i < size; i++) {
            // 此处使用了队列，先进先出
            let node = lists.takeFirst();     // ListNode
            if (visited[node.data] === -1) {
                prevvertices[node.data] = num;
                if (node.data === end) {
                    print(prevvertices, start, end);
                    return;
                }
                visited[node.data] = 0;
                queue.push(node.data);
            }
        }
    }
}

const print = (prev, s, t) => {
    if (prev[t] != -1 && t != s) {
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
BFS(0, 6, g);
//console.log(g);
// for (let val of g.adjacencyLists) {
//     console.log(val);
// }