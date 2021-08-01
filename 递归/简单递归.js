/**
 * 爬楼梯：
 *  一次可以上一层台阶或两层台阶
 * 第n次就有两种情况，如果上一阶，那么还有n-1阶；
 *                 如果上两阶，那么还有n-2阶。
 * @param {*} n 
 * @returns value of way
 */
var GoUpstairs = (n) => {
    // 结束条件
    if (n <= 2) return n;
    // 通项公式：f(n) = f(n-1) + f(n-2)
    return GoUpstairs(n - 1) + GoUpstairs(n - 2);
}

/**
 * 斐波那契数列
 *  此为最简单解法，但没有进行递归优化，会有很多的重复计算
 * @param {*} n 
 * @returns 
 */
var Fibonacci = (n) => {
    // 结束条件 f(2) = f(1) + f(0)
    if (n < 2) return n;
    // 通项公式：f(n) = f(n-1) + f(n-2)
    return Fibonacci(n - 1) + Fibonacci(n - 2);
}

function ListNode(val, next) {
    this.val = val == undefined ? 0 : val
    this.next = next == undefined ? 0 : val
}
/**
 * 递归反转链表
 * 递：
 *  (1) -> (2) -> (3) -> (4) ->
 * 归：
 *  <- (1) <- (2) <- (3) <- (4)
 *  
 *  详解见recursionRerverseLinkedList图
 *  
 * @param {*} head 
 */
var reverseListNode = (head) => {
    // 结束条件
    if (head === null || head.next === null) return head;

    const tmp = reverseListNode(head.next);
    head.next.next = head;
    head.next = null;
    return tmp;
}