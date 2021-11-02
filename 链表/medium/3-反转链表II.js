/**
 * Leetcode:92
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    if (!head) return head;
    const tmp = new ListNode(-1);
    tmp.next = head;
    let pre = tmp;
    for (let i = 0; i < left - 1; i++) pre = pre.next;
    let back = pre;
    for (let i = 0; i < right - left + 1; i++) back = back.next;

    let l = pre.next, r = back.next;
    pre.next = null;
    back.next = null;
    (head => {
        let pre = null, cur = head;
        while (cur) {
            let next = cur.next;
            cur.next = pre;
            pre = cur;
            cur = next;
        }
    })(l);
    pre.next = back;
    l.next = r;
    return tmp.next;
};
// 头插法
var reverseBetween1 = function (head, left, right) {
    const tmp = new ListNode(-1);
    tmp.next = head;
    let pre = tmp;
    for (let i = 0; i < left - 1; i++) pre = pre.next;
    let cur = pre.next;
    for (let i = 0; i < right - left; i++) {
        let next = cur.next;
        cur.next = next.next;
        next.next = pre.next;
        pre.next = next;
    }
    return tmp.next;
}