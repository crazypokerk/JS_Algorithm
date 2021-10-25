/**
 * Leetcode:1474
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var deleteNodes = function (head, m, n) {
    if (!head) return head;
    let res = head, next = res, cur = head;
    let mcount = m, ncount = n;
    while (cur) {
        while (cur && mcount > 0) {
            next = cur;
            cur = cur.next;
            mcount--;
        }
        while (cur && ncount > 0) {
            cur = cur.next;
            ncount--;
        }
        next.next = cur;
        mcount = m, ncount = n;
    }
    return res;
};