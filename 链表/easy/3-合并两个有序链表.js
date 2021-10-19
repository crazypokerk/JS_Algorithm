/**
 * Leetcode:21
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let head = new ListNode(-1);
    let pre = head;
    while (l1 && l2) {
        if (l1.val > l2.val) {
            pre.next = l2;
            l1 = l1.next;
        } else {
            pre.next = l1;
            l2 = l2.next;
        }
        pre = pre.next;
    }
    pre.next = l2 === null ? l1 : l2;
    return head.next;
};