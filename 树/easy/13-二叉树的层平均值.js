/**
 * Leetcode:637
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
    const sums = [], counts = [];
    const result = [];
    if (!root) return result;
    let dfs = (root, lev) => {
        if (!root) return 0;
        if (lev < sums.length) {
            sums[lev] += root.val;
            counts[lev] += 1;
        } else {
            sums.push(root.val);
            counts.push(1);
        }
        dfs(root.left, lev + 1);
        dfs(root.right, lev + 1);
    }
    dfs(root, 0);
    for (let i = 0; i < sums.length; i++) {
        result.push(sums[i] / counts[i]);
    }
    return result;
};
var averageOfLevelsBFS = root => {
    const queue = [];
    if (!root) return queue;
    let result = [];
    queue.push(root);
    while (queue.length) {
        let size = queue.length;
        let sum = 0;
        for (let i = 0; i < size; i++) {
            let cur = queue.shift();
            sum += cur.val;
            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
        }
        result.push(sum / size);
    }
    return result;
}