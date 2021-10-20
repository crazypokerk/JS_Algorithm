/**
 * Leetcode:203
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    if (!head) return null;
    let pre = new ListNode(-1);
    pre.next = head;
    let cur = pre;
    while (cur.next) {
        if (cur.next.val === val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return pre.next;
};