/**
 * 
 *    0 —— 1 —— 2
 *    |    |    |
 *    3 —— 4 —— 5
 *         |    | 
 *         6 —— 7
 * 
 * 
 * @param {*} start 
 * @param {*} end 
 */
const BFS = (start, end) => {
    // 1、输入起始节点

    // 2、辅助三变量：
    //  visted: 记录已经访问过的节点
    //  queue: 记录当前层，已经被访问的，但这些被访问的相邻节点还未被访问
    //  prevVertices: 记录当前节点是从哪个前驱节点遍历过来的
    let visited = [], queue = [], prevvertices = [];

    queue.push(start);
    while (visited) {
        let cur = visited.pop();
        queue.shift();
    }
}