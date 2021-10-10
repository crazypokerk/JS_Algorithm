/**
 * Leetcode:56
 * 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
 * 输出：[[1,6],[8,10],[15,18]]
 * 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 * @param intervals 
 */
function merge(intervals: number[][]): number[][] {
    intervals.sort((a: number[], b: number[]): number => { return a[0] - b[0] });
    let result: number[][] = [];
    result.push(intervals[0]);
    for (let i: number = 1; i < intervals.length; i++) {
        if (intervals[i][0] > result[result.length - 1][1]) {
            result.push(intervals[i]);
        } else {
            result[result.length - 1][1] = result[result.length - 1][1] > intervals[i][1] ?
                result[result.length - 1][1] : intervals[i][1];
        }
    }
    return result;
};