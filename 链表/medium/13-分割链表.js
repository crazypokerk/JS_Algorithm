/**
 * Leetcode:86
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    if (!head) return head;
    let small = new ListNode(-1);
    const sH = small;
    let big = new ListNode(-1);
    const bH = big;
    while (head) {
        if (head.val >= x) {
            big.next = head;
            big = big.next;
        } else {
            small.next = head;
            small = small.next;
        }
        head = head.next;
    }
    big.next = null;
    small.next = bH.next;
    return sH.next;
};