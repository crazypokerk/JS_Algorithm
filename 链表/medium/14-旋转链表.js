/**
 * Leetcode:61
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head || !head.next || k === 0) return head;
    let cur = head;
    let listLen = 1;
    while (cur.next) {
        cur = cur.next;
        listLen++;
    }
    if (k % listLen === listLen) return head;
    cur.next = head;

    for (let i = 0; i < listLen - k % listLen; i++) {
        cur = cur.next;
    }
    let newHead = cur.next;
    cur.next = null;
    return newHead;
};