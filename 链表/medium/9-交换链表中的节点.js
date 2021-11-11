/**
 * Leetcode:1721
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
    if (!head) return head;
    const sub = new ListNode(-1);
    sub.next = head;
    let left = sub, right = sub, tmp = sub;
    for (let i = 0; i < k; i++) {
        tmp = tmp.next;
    }
    while (tmp) {
        tmp = tmp.next;
        right = right.next;
    }
    for (let i = 0; i < k; i++) {
        left = left.next;
    }
    [left.val,right.val] = [right.val,left.val];
    return sub.next;
};