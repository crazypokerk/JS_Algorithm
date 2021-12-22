/**
 * Leetcode:LCP 07
 * @param {number} n
 * @param {number[][]} relation
 * @param {number} k
 * @return {number}
 */
var numWays = function (n, relation, k) {
    // 1、新建一个各顶点可达目的地的数组
    const edges = new Array(n).fill(0).map(() => new Array());
    for (const [vertice, dst] of relation) {
        edges[vertice].push(dst);
    }
    // 2、记录步数及用队列记录下一步
    let steps = 0; const queue = [0];
    while (queue.length && steps < k) {
        steps++;
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const curDst = queue.shift();
            // 3、遍历目的地数组，看可达的下一步有哪些，也就是下一层是哪些
            const dstList = edges[curDst];
            for (const nextDst of dstList) queue.push(nextDst);
        }
    }
    let ways = 0;
    if (steps === k) {
        while (queue.length) {
            // 判断经过k轮是否传递到编号为n-1顶点上
            if (queue.shift() === n - 1) ways++;
        }
    }
    return ways;
};