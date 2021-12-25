/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * Leetcode:559
 * @param {Node|null} root
 * @return {number}
 */
var maxDepthBFS = function (root) {
    if (!root) return 0;
    let maxDepth = 0;
    const queue = [root];
    while (queue.length) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let cur = queue.shift();
            if (cur.children) {
                for (let j = 0; j < cur.children.length; j++) {
                    queue.push(cur.children[j]);
                }
            }
        }
        maxDepth++;
    }
    return maxDepth;
};
var maxDepthDFS = root => {
    if (!root) return 0;
    let maxD = 0;
    for (let child of root.children) {
        let childD = maxDepthDFS(child);
        maxD = Math.max(maxD, childD);
    }
    return maxD + 1;
}