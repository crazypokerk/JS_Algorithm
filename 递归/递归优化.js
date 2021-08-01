/**
 * 改造后的斐波那契数列
 *  如果有计算过的 f(n) 就放在Map里，防止重复计算
 * 
 * 递归调试方法：
 *      1、打印日志发现递归值，拿到递归值，输入条件断点；
 *      2、结合条件断点调试。
 *      3、JavaScript控制台右键---Add Conditional breakpoint
 * @param {*} n 
 * @returns val
 */
let Fibonacci = (n) => {
    if (n < 2) return n;
    const exist = new Map();
    if (exist.has(n)) {
        return exist.get(n);
    }

    let val = Fibonacci(n - 1) + Fibonacci(n - 2);
    exist.set(n, val);
    return val;
}