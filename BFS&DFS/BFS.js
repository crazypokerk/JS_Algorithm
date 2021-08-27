import Graph from 'BFS&DFS/Graph';
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
    queue.push(s);
    while (queue.length != 0) {
        let num = queue.shift();     // LinkedList
        // 开始遍历链表
        for (let i = 0; i < num.size; i++) {
            let node = num.takeFirst(i);     // ListNode
            if (visited[node.data] == -1) {
                prevvertices[node.data] = i;
                if (node.data == t) {
                    print();
                    return;
                }
                visited[node.data] = 0;
                queue.push(node);
            }
        }
    }
}

const print = () => { }

var g = new Graph(8);