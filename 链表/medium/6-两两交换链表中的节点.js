/**
 * Leetcode:24
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (!head) return head;
    const sub = new ListNode(-1);
    sub.next = head;
    let cur = sub;
    while (cur.next && cur.next.next) {
        let n1 = cur.next, n2 = cur.next.next;
        cur.next = n2;
        n1.next = n2.next;
        n2.next = n1;
        cur = n1;
    }
    return sub.next;
};