/**
 * Leetcode:143
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    if (!head) return head;
    //1、中间节点
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    //2、反转
    let temp = slow.next;
    slow.next = null;
    let pre = null, cur = temp;
    while (cur) {
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    //3、合并
    const result = new ListNode(-1);
    let m1, m2;
    while (head && pre) {
        m1 = head.next;
        m2 = pre.next;

        head.next = pre;
        head = m1;
        pre.next = head;
        pre = m2;
    }
    return result.next;
};